import HeaderNav from "@/components/header-nav"; //alias import
import FeaturedMovies from "@/components/home/featured-movies";
import HeroBanner from "@/components/home/hero-banner";

//SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <footer className="bg-amber-400 text-center text-gray-800 py-6">
        <p className="text-lg font-semibold">
          © 2025 CineScope
        </p>
        <p className="text-sm">All rights reserved.</p>
      </footer>
    </div>
  );
}
