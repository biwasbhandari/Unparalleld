"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto">
      <h3 className="text-red-800">Something Went Wrong</h3>

      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
