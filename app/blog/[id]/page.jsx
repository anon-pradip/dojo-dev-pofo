import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SingleBlog = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <div className=" mt-9">
      <div className=" flex flex-col lg:flex-row gap-4 justify-between items-start">
        <div className=" flex flex-col flex-1 gap-y-6">
          <p className=" text-2xl font-bold text-slate-400">{data.title}</p>
          <p>{data.desc}</p>
          <div className=" flex gap-3 justify-start items-center">
            <Image
              height={100}
              width={100}
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
            />
            <p>{data.username}</p>
          </div>
        </div>
        <div className=" flex-1">
          <Image
            height={400}
            width={400}
            className=" bg-gray-50 h-60 w-96 object-cover"
            src={data.img}
            alt="single blog"
          />
        </div>
      </div>
      <div className=" mt-10">{data.content}</div>
    </div>
  );
};

export default SingleBlog;
