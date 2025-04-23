import { Button } from "@/components/ui/button";
 import { Play, Film } from "lucide-react";

//Hero Banner Section
export default function HeroBanner() {
  return (
    <section id="overview" className="relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 z-0">
        <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
      </div>

      <div className="container relative z-20 px-4 py-40">
      <h1 className="text-white text-6xl font-bold text-center mb-4">
        Discover Amazing <br />
        Movies
      </h1>
      <p className="text-white text-center text-lg mb-4">
        Explore our collection of the best movies from around the world.
        </p>
        <div className="flex justify-center gap-x-4">
           <Button
             variant="default"
             className="hover:scale-105 transition-transform duration-200"
           >
             <Play className="w-4 h-4 mr-1" />
             Browse Movies
           </Button>
           <Button
             variant="outline"
             className="bg-black/40 border-white/40 text-white hover:bg-white/20  hover:text-white hover:shadow-md hover:scale-105 transition-all duration-200"
           >
             <Film className="w-4 h-4 mr-2" />
             Latest Releases
           </Button>
         </div>

      </div>
    </section>
  );
}
