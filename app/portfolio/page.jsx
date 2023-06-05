import Image from "next/image";
import Link from "next/link";
import React from "react";

import Illustration from "public/illustration.png";
import App from "public/apps.jpg";
import Website from "public/websites.jpg";

const items = [
  {
    name: "Illustrations",
    id: 1,
    href: "/portfolio/illustrations",
    image: Illustration,
  },
  { name: "Websites", id: 2, href: "/portfolio/websites", image: Website },
  { name: "Applications", id: 3, href: "/portfolio/applications", image: App },
];

const Portfolio = () => {
  return (
    <div className="  self-start">
      <p className=" text-slate-400 py-5 text-2xl font-semibold">
        Choose a gallery
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center container mx-auto ">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className=" relative text-slate-300 hover:scale-105 ease-in hover:text-green-500 duration-300 border-4 rounded-md border-slate-400"
          >
            <Image
              src={item.image}
              height={300}
              width={300}
              className=" h-72 object-cover"
            />
            <p className=" absolute bottom-1 text-4xl font-bold left-4">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
