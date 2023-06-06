import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <>
      <div className=" mt-7">
        {data.map((item) => {
          return (
            <Link
              href={`/blog/${item._id}`}
              key={item._id}
              className=" flex flex-col lg:flex-row justify-center items-center gap-6"
            >
              <div className=" flex-1">
                <Image
                  height={400}
                  width={400}
                  className=" bg-gray-50 h-96 w-96 object-cover"
                  src={item.img}
                  alt=""
                />
              </div>

              <div className=" flex-1 text-justify">{item.desc}</div>
            </Link>
          );
        })}
      </div>
      {/* todo: give bordr for every sections to better differentiation */}
    </>
  );
};

export default Blog;
