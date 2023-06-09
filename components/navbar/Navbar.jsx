"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Rubik_Puddles } from "next/font/google";
import Link from "next/link";
import { XCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import { signOut, useSession } from "next-auth/react";

const font = Rubik_Puddles({
  subsets: ["latin"],
  weight: "400",
});

const navigation = [
  { name: "Home", href: "/", id: 1 },
  { name: "Portfolio", href: "/portfolio", id: 2 },
  { name: "Blog", href: "/blog", id: 3 },
  { name: "About", href: "/about", id: 4 },
  { name: "Contact", href: "/contact", id: 5 },
  { name: "Dashboard", href: "/dashboard", id: 6 },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const session = useSession();
  const inactiveclass =
    " px-3 py-2 capitalize hover:bg-slate-400 hover:text-black hover:rounded-md";
  const activeclass =
    inactiveclass +
    " bg-slate-300 text-black rounded-md transition-all ease-out duration-700 ";
  return (
    <>
      <div className="flex justify-between items-center w-full py-5">
        <div className=" w-44">
          <Link href={"/"} className={`${font.className} text-3xl`}>
            Dojo-Dev
          </Link>
        </div>

        <div className="hidden lg:flex space-x-3 grow justify-end w-full items-center ">
          <ToggleDarkMode />
          {navigation.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.id}
              className={
                pathname === navItem.href ? activeclass : inactiveclass
              }
            >
              {navItem.name}
            </Link>
          ))}
          <button
            onClick={signOut}
            className=" px-2 bg-green-600 text-white rounded-sm"
          >
            Logout
          </button>
        </div>
        <div className=" flex relative">
          <div className=" block lg:hidden">
            <button onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? (
                <XCircleIcon height={30} width={30} />
              ) : (
                <Bars3Icon height={30} width={30} />
              )}
            </button>
          </div>
          {isMobile && (
            <div className="lg:hidden flex flex-col bg-slate-400 rounded-md gap-y-1 absolute right-8 z-50 pt-3 justify-center">
              <ToggleDarkMode />
              {navigation.map((navItem) => (
                <Link
                  href={navItem.href}
                  key={navItem.id}
                  className={
                    pathname === navItem.href ? activeclass : inactiveclass
                  }
                  onClick={() => setIsMobile(!isMobile)}
                >
                  {navItem.name}
                </Link>
              ))}
              {session.status === "authenticated" && (
                <button
                  onClick={signOut}
                  className="my-2 px-2 py-2 bg-green-600 text-white rounded-md"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
