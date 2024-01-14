"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, SidebarClose, User, ShoppingBasket } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface NavLink {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  const { data: session } = useSession();

  const navlinks: NavLink[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Shop", link: "/shop" },
  ];

  const closeSideMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: scrollingDown ? -100 : 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "flex justify-between px-8 items-center py-3 z-10 animate-fade-in font-normal",
        !scrollingDown && "sticky top-0"
      )}
    >
      <div className="flex items-center gap-8">
        <section className="flex items-center gap-4">
          <MenuIcon
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden"
          />
          <Link href={"/"} className="md:text-3xl text-xl tracking-wide">
            UNPARALLELD
          </Link>
        </section>
      </div>

      <div className="flex-grow  items-center justify-center hidden lg:flex">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="lg:block mx-4 hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
          <SidebarClose
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />
          {navlinks.map((item, index) => (
            <Link
              key={index}
              className="font-bold"
              href={item.link}
              onClick={closeSideMenu}
            >
              {item.label}
            </Link>
          ))}
        </section>
      </div>

      <section className="flex items-center gap-4">
        <ShoppingBasket className="text-3xl" />
        {session ? (
          <Link href={`/users/${session.user.id}`}>
            {session.user.image ? (
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={session.user.image}
                  alt={session.user.name!}
                  width={40}
                  height={40}
                  className="img scale-animation"
                />
              </div>
            ) : (
              <User className="cursor-pointer rounded-full" />
            )}
          </Link>
        ) : (
          <Link href="/auth">
            <Button>Login</Button>
          </Link>
        )}
      </section>
    </motion.nav>
  );
};

export default Navbar;
