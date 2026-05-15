import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import LatestArticles from "@/components/LatestArticles";
import LatestProjects from "@/components/LatestProjects";
import AwsProjectsSection from "@/components/AwsProjectsSection";
import BookNotes from "@/components/RecentBookCard";

export default function Home() {
  return (
    <main>
      {/* LinkedIn-style hero with cover banner, profile image, name, nav */}
      <Hero />

      {/* At-a-glance analytics stats */}
      <StatsSection />

      {/* Latest blog articles */}
      <LatestArticles />

      {/* General projects (existing) */}
      <LatestProjects />

      {/* AWS cloud projects (new) */}
      <AwsProjectsSection />

      {/* Book notes preview */}
      <BookNotes />
    </main>
  );
}
