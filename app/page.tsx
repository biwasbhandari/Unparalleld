import Image from "next/image";
import Shopping from "@/public/shoppinggg.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
      <div className="flex flex-col gap-3 w-full md:w-3/4 lg:w-1/2 items-center justify-center p-4 md:p-8">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide text-center">
          #DRESSTOINTRIGUE
        </h1>
        <Button variant="link" className="flex items-center mt-4">
          Start Personalizing
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>

      <div className="relative h-80 md:h-full bg-gray-200 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Shopping}
            alt="shopping"
            className="object-cover w-full h-full"
            fill
            sizes="100vh"
            priority
          />
        </div>
      </div>
    </main>
  );
}
