import Image from "next/image";
import React from "react";
import AboutImage from "public/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3">
      {/* image and overlay */}
      <div>
        <div className=" relative">
          <Image
            src={AboutImage}
            width={1000}
            className="grayscale bg-red-500"
          />
          <div className=" absolute  bg-green-500 text-white px-2 py-1 lg:bottom-[0.3px]">
            <p className=" text-2xl font-semibold underline">
              Digital Storytellers
            </p>
            <p className=" text-lg font-semibold">
              Handcrafting award winnig digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* bottom two text containers */}
      <div className="container mx-auto flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6 sm:space-x-0 sm:space-y-6 mt-28 md:mt-20 text-justify lg:mt-5">
        <p className="border p-2 h-max flex-1">
          <span className=" text-3xl">Who we are?</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consequatur labore quaerat voluptates sunt itaque ab animi porro
          repellendus! Voluptatum tenetur, sint impedit quia eos odit ducimus
          eius autem vitae. Dicta aliquid vel dolorum reprehenderit cupiditate
          vitae soluta, consectetur voluptate magni corporis est quos laudantium
          minus odit iusto inventore dolores veniam explicabo optio similique
          eligendi! Optio autem ad repellendus maxime? Sequi quos sunt
          accusantium culpa et necessitatibus hic eaque ipsa numquam,
          perspiciatis laborum minus natus id quisquam voluptatum ullam quo
          velit ad mollitia consequatur est. Rerum culpa officiis saepe
          inventore.
        </p>

        <p className=" mt-6 border p-2 pb-4 flex-1">
          <span className=" text-3xl">What we do?</span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consequatur labore quaerat voluptates sunt itaque ab animi porro
          repellendus! Voluptatum tenetur, sint impedit quia eos odit ducimus
          eius autem vitae. Dicta aliquid vel dolorum reprehenderit cupiditate.
          <ul className=" list-decimal list-inside mb-3">
            <li>Creative Illustrations</li>
            <li>Fast and Handy Apps</li>
            <li>Dynamic Websites</li>
          </ul>
          <Link
            className=" px-3 py-2 bg-green-500 text-white rounded-sm"
            href={"/contact"}
          >
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
