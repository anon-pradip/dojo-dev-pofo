import Image from "next/image";
import React from "react";

const SingleBlog = () => {
  return (
    <div className=" mt-9">
      <div className=" flex flex-col lg:flex-row gap-4 justify-between items-start">
        <div className=" flex flex-col flex-1 gap-y-6">
          <p className=" text-2xl font-bold text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            enim.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            esse aliquam, eos eveniet cumque tenetur, animi quibusdam in modi
            consectetur recusandae doloribus ullam dolorem labore ducimus rem
            est, necessitatibus deleniti!
          </p>
          <div className=" flex gap-3 justify-start items-center">
            <Image
              height={100}
              width={100}
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className=" flex-1">
          <Image
            height={400}
            width={400}
            className=" bg-gray-50 h-60 w-96 object-cover"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt="single blog"
          />
        </div>
      </div>
      <div className=" mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, alias
        nobis voluptatibus, et quaerat adipisci officiis, aliquam odio molestias
        blanditiis eos laboriosam nesciunt commodi ducimus vel obcaecati autem.
        Quod, excepturi?
      </div>
    </div>
  );
};

export default SingleBlog;
