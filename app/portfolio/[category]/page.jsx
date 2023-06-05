import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ params }) => {
  const { category } = params;
  return (
    <div className="relative text-white">
      <p className=" capitalize font-bold text-xl px-4 text-green-300">
        {category}
      </p>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 place-items-start mt-10">
        <div className="px-6 lg:col-span-7 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className=" text-slate-400 text-2xl font-bold tracking-tight sm:text-6xl">
              Creative Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md mb-12 lg:mb-0 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 xl:top-5">
          <Image
            height={400}
            width={400}
            className=" bg-gray-50 h-96 w-96 object-cover lg:absolute lg:inset-0"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
