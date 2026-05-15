import path from "node:path";
import Link from "next/link";
import { Suspense } from "react";
import fs from "node:fs/promises";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import { Spacer } from "@/components/Spacer";
import { Comment } from "@/components/Comment";
import { GalleryCard } from "@/components/GalleryCard";
import { TableOfContents } from "@/components/TableOfContents";
import { BookDetail } from "@/components/BookDetail";
import BookDetailLayout, { TocEntry } from "@/components/Bookdetaillayout"

// ── Frontmatter type ──────────────────────────────────────────────
type Frontmatter = {
  title: string;
  author: string;
  description?: string;
  image?: string;
  date?: string;
  recommendation?: string;
  published: boolean;
  og_image?: string;
  tags?: string[];
};

// ── readPage — slug is string[] to match [...slug] ────────────────
async function readPage(slug: string[]) {
  try {
    const filePath =
      path.join(process.cwd(), "app", "bookNote", ...slug) + ".md";
    const source = await fs.readFile(filePath, "utf8");

    const vercelTheme = await import("@/app/vercel-theme.json");
    const rehypePrettyCodeOptions: Options = { theme: vercelTheme as any };

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      components: {
        BookDetail,
        Comment,
        GalleryCard,
        Link,
        Spacer,
        TableOfContents,
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
  } catch {
    notFound();
  }
}

// ── extractToc — slug is string[] ────────────────────────────────
async function extractToc(slug: string[]): Promise<TocEntry[]> {
  try {
    const filePath =
      path.join(process.cwd(), "app", "bookNote", ...slug) + ".md";
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

// ── generateStaticParams — returns { slug: string[] } ────────────
export const dynamicParams = false;
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "app", "bookNote");

  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({
        slug: [f.replace(/\.md$/, "")], // ← array, not string
      }));
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
  const { frontmatter } = await readPage(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      siteName: "Jamil Khan's personal website",
      images: frontmatter.og_image
        ? [{ url: frontmatter.og_image, width: 1200, height: 630, alt: "" }]
        : [
            {
              url: `api/og?title=${frontmatter.title}`,
              width: 1200,
              height: 630,
              alt: "",
            },
          ],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────
export default async function Page({
  params,
}: {
  params: { slug: string[] };
}) {
  const { content, frontmatter } = await readPage(params.slug);
  const toc = await extractToc(params.slug);

  const book = {
    title: frontmatter.title,
    author: frontmatter.author ?? "",
    slug: params.slug.join("/"),
    image: frontmatter.image ?? frontmatter.og_image ?? "",
    description: frontmatter.description ?? "",
    tags: frontmatter.tags ?? [],
    recommendation: frontmatter.recommendation,
    dateRead: frontmatter.date,
  };

  return (
    <BookDetailLayout book={book} toc={toc}>
      <Suspense>
        {!frontmatter.published && (
          <>
            <br />
            <Comment type="block">
              This page is unpublished. Feel free to poke around!
            </Comment>
          </>
        )}
        {content}
      </Suspense>
    </BookDetailLayout>
  );
}