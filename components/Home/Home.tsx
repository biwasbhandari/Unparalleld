import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
      <div className="flex flex-col gap-3 w-full items-center justify-center p-4 md:p-8 order-2 md:order-1 animate-fade-in">
        <h1 className="text-4xl font-bold leading-tight tracking-wide text-center">
          #DRESSTOINTRIGUE
        </h1>
        <Button variant="link" className="flex items-center mt-4">
          <Link href="/tshirts">Start Personalizing</Link>
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
      <div className="relative h-full overflow-hidden order-1 md:order-2 -z-30">
        <div className="absolute inset-0 animate-fade-in">
          <div className="h-full md:h-1/2">
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
}
