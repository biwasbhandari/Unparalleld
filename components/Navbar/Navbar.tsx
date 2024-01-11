import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-2">
      <Logo />
      <NavItems />
      <ModeToggle />
    </div>
  );
};
