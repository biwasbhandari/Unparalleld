import { Button } from "../ui/button";
import { DarkMode } from "../ui/dark-mode";

const ModeToggle = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button>Login</Button>
      <DarkMode />
    </div>
  );
};
export default ModeToggle;
