import Image from "next/image";
import Shopping from "@/public/qw.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-around p-24">
      <div className="flex flex-col gap-3">
        <p className=" text-center">Welcome to Unparalleld..</p>
        <Button className="flex gap-2 items-center">
          Start Shopping
          <ArrowRight />
        </Button>
      </div>
      <div className=" flex items-center justify-center">
        <Image src={Shopping} height={500} alt="Shopping" priority></Image>
      </div>
    </main>
  );
}
