"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Rubik_Puddles } from "next/font/google";
import Link from "next/link";
import { XCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";

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
  const inactiveclass = " px-2 py-1 capitalize";
  const activeclass =
    inactiveclass +
    " bg-slate-300 text-black rounded-md transition-all ease-out duration-700 ";
  return (
    <>
      <div className=" w-full flex justify-between items-center py-5 ease-out">
        <div>
          <Link href={"/"} className={`${font.className} text-3xl`}>
            Dojo-Dev
          </Link>
        </div>
        <div className="hidden lg:flex justify-between items-center space-x-3 ">
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
        </div>
        {isMobile && (
          <div className="hidden  lg:flex justify-between items-center space-x-3 ">
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
          </div>
        )}
      </div>

      <div className=" block lg:hidden">
        <button onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <XCircleIcon height={12} width={12} />
          ) : (
            <Bars3Icon height={12} width={12} />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
