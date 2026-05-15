import path from "node:path";
import Link from "next/link";
import { Suspense } from "react";
import fs from "node:fs/promises";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import { Tag } from "@/components/Tag";
import { TableOfContents } from "@/components/TableOfContents";
import { GalleryCard } from "@/components/GalleryCard";
import { Grid } from "@/components/Grid";
import { Spacer } from "@/components/Spacer";
import { Comment } from "@/components/Comment";
import { Mention } from "@/components/Mention";
import { TagGroup } from "@/components/TagGroup";
import { Playground } from "@/components/Playground";
import { BookDetail } from "@/components/BookDetail";
import ArticleLayout, { TocEntry } from "@/components/ArticleLayout";

type Frontmatter = {
  title?: string;
  description?: string;
  published?: boolean;
  og_image?: string;
  date?: string;
  tags?: string[];
};

// ── readPage ──────────────────────────────────────────────────────
async function readPage(slug: string[]) {
  try {
    const filePath = path.join(process.cwd(), "app", ...slug) + ".md";
    const page = await fs.readFile(filePath, "utf8");

    const vercelTheme = await import("@/app/vercel-theme.json");
    const rehypePrettyCodeOptions: Options = {
      theme: vercelTheme as any,
    };

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      components: {
        BookDetail,
        Comment,
        TableOfContents,
        Playground,
        GalleryCard,
        Grid,
        Link,
        Mention,
        Spacer,
        Tag,
        TagGroup,
      },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [
            [rehypePrettyCode as any, rehypePrettyCodeOptions],
            rehypeSlug,
            rehypeKatex as any,
          ],
        },
      },
    });
    return { content, frontmatter };
  } catch (error) {
    notFound();
  }
}

// ── extractToc ────────────────────────────────────────────────────
async function extractToc(slug: string[]): Promise<TocEntry[]> {
  try {
    const filePath = path.join(process.cwd(), "app", ...slug) + ".md";
    const source = await fs.readFile(filePath, "utf8");
    const toc: TocEntry[] = [];

    for (const line of source.split("\n")) {
      const h2 = line.match(/^##\s+(.+)/);
      const h3 = line.match(/^###\s+(.+)/);
      const match = h2 ?? h3;
      if (!match) continue;

      const label = match[1].replace(/`/g, "").trim();
      const id = label
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      toc.push({ id, label, level: h2 ? "h2" : "h3" });
    }

    return toc;
  } catch {
    return [];
  }
}

// ── generateMetadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const result = await readPage(params.slug);
  if (!result) return {};
  const { frontmatter } = result;

  const metadata: Metadata = {
    title: frontmatter?.title ?? "",
    description: frontmatter?.description ?? "",
    openGraph: {
      siteName: "Jamil Khan's personal website",
      images: [
        {
          url: frontmatter?.og_image
            ? frontmatter.og_image
            : `api/og?title=${frontmatter?.title ?? ""}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
  };

  return metadata;
}

// ── generateStaticParams ──────────────────────────────────────────
export const dynamicParams = false;
export async function generateStaticParams() {
  function getMdSlugs(folder: string, paths: string[] = []) {
    return paths
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""))
      .map((slug) => path.join(folder, slug))
      .map((slug) => slug.split("/"))
      .map((slug) => ({ slug }));
  }

  const app = path.join(process.cwd(), "app");
  const files = await fs.readdir(app, { withFileTypes: true });
  const folders = files.filter((file) => file.isDirectory());

  let slugs = await Promise.all(
    folders.map(async (folder) => {
      const pathsInFolder = await fs.readdir(path.join(app, folder.name));
      return getMdSlugs(folder.name, pathsInFolder);
    })
  ).then((s) => s.flat());

  const pathsInAppFolder = files.map((file) => file.name);
  slugs = slugs.concat(getMdSlugs("", pathsInAppFolder));
  return slugs;
}

// ── Page ──────────────────────────────────────────────────────────
export default async function Page({ params }: { params: { slug: string[] } }) {
  const result = await readPage(params.slug);
  if (!result) notFound();

  const { content, frontmatter } = result;
  const toc = await extractToc(params.slug);

  const note = {
    text: frontmatter?.title ?? "",
    slug: params.slug.join("/"),
    description: frontmatter?.description ?? "",
    // Only pass image if it's a real non-empty string
    image: typeof frontmatter?.og_image === "string" && frontmatter.og_image.length > 0
      ? frontmatter.og_image
      : undefined,
    // Always an array
    tags: Array.isArray(frontmatter?.tags) ? frontmatter.tags : [],
  };

  return (
    <ArticleLayout
      note={note}
      toc={toc}
      date={frontmatter?.date ?? ""}
    >
      <Suspense>
        {frontmatter?.published === false && (
          <>
            <br />
            <Comment type="block">
              Hey there, you&apos;ve found an unpublished page. Feel free to
              poke around, but keep in mind the thoughts here are a bit more
              in-progress than usual. :)
            </Comment>
          </>
        )}
        {content}
      </Suspense>
    </ArticleLayout>
  );
}