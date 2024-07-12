import Header from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";
import { projects } from "@/app/project/projects";
import LatestProjects from "@/components/LatestProjects";
import BookNotes from "@/components/RecentBookCard";
import Projects from "@/components/RecentProject";

export default function Home() {
  return (
    <main>
      <Header />
      <LatestArticles />
      <LatestProjects />
      <BookNotes />
    </main>
  );
}
