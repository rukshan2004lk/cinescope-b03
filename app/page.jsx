import HeaderNav from "@/components/header-nav"; //alias import
import Image from "next/image";

//SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />

      <main className="h-screen bg-primary">Main Section</main>
      <footer className="h-72  bg-amber-400">Our New Footer</footer>
    </div>
  );
}
