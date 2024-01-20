"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center md:h-[90vh]">
      <div className="flex flex-col gap-3 w-full items-center p-4 md:p-8 order-2 md:order-1 ">
        <h1 className="text-4xl font-bold leading-tight tracking-wide text-center">
          #DRESSTOINTRUGE
        </h1>
        <Button variant="secondary" className="flex items-center mt-4">
          <Link href="/tshirts">Start Personalizing</Link>
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
      <div className="  h-full overflow-hidden order-1 md:order-2 cursor-pointer">
        <div className=" inset-0 animate-fade-in">
          <div className="h-full md:h-1/2">
            <Slider />
          </div>
        </div>
      </div>
    </main>
  );
}
