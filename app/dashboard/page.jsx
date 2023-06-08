"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import React from "react";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, loading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className=" container gap-4 flex justify-between items-start flex-col md:flex-row">
        <div className="posts flex flex-col ">
          {loading
            ? "Loading"
            : data?.map((item) => (
                <div
                  className=" w-full mt-0 md:mt-10 flex flex-col mb-5 border-2  pb-2"
                  key={item._id}
                >
                  <div className="rounded-lg ">
                    <Image
                      alt="image"
                      className="object-cover object-center h-full w-full"
                      src={item.img}
                      height={400}
                      width={400}
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium  text-center">
                    {item.title}
                  </h2>
                  <p className="text-center leading-relaxed text-base">
                    {item.content}
                  </p>
                  <button
                    className="flex mx-auto text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-redd-600 rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-3xl tracking-wider text-center font-bold title-font mb-5">
              Add New Post
            </h2>
            <div className="relative mb-4">
              <label htmlFor="title" className="leading-7 text-sm ">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm ">
                Description
              </label>
              <input
                type="text"
                id="desc"
                name="desc"
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="image" className="leading-7 text-sm ">
                Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="content" className="leading-7 text-sm ">
                Content
              </label>
              <textarea
                rows={5}
                cols={20}
                type="text"
                id="content"
                name="content"
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-1"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Dashboard;
