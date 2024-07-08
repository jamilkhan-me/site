import Header from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <LatestArticles />
    </main>
  );
}
