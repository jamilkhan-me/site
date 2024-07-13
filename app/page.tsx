import Header from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import LatestProjects from "@/components/LatestProjects";
import BookNotes from "@/components/RecentBookCard";

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
