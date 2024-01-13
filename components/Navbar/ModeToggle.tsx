import Link from "next/link";
import { Button } from "../ui/button";
import { DarkMode } from "../ui/dark-mode";

const ModeToggle = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
};
export default ModeToggle;
