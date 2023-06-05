import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" mt-7">
        <Link
          href={"/blog/testId"}
          className=" flex flex-col lg:flex-row justify-center items-center gap-6"
        >
          <div className=" flex-1">
            <Image
              height={400}
              width={400}
              className=" bg-gray-50 h-96 w-96 object-cover"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>

          <div className=" flex-1 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            explicabo voluptas minima cumque, id dolorem! Ipsa dicta, pariatur,
            iure aspernatur quo optio quidem ducimus accusamus ratione labore
            explicabo nihil nostrum. Fuga veniam alias excepturi sunt ullam
            accusantium, aut qui provident doloremque. Dolore obcaecati porro
            deserunt quae corrupti. Quos, nulla perferendis? Molestiae, corporis
            rerum in repellat itaque eaque ab ullam reiciendis. Magni illo
            molestiae, nemo numquam similique obcaecati recusandae odio
            assumenda sit dolores id at praesentium cum tempore dolore rerum
            dolorem laudantium porro? Dolores ea sed impedit laborum optio iste
            quaerat! Ullam et eos, obcaecati blanditiis nostrum, quia recusandae
            ducimus quos distinctio error voluptates minima.
          </div>
        </Link>
      </div>
      {/* todo: give bordr for every sections to better differentiation */}
      <div className=" mt-7">
        <Link
          href={"/blog/testId"}
          className=" flex flex-col lg:flex-row-reverse justify-center items-center gap-6"
        >
          <div className=" flex-1">
            <Image
              height={400}
              width={400}
              className=" bg-gray-50 h-96 w-96 object-cover"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>

          <div className=" flex-1 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            explicabo voluptas minima cumque, id dolorem! Ipsa dicta, pariatur,
            iure aspernatur quo optio quidem ducimus accusamus ratione labore
            explicabo nihil nostrum. Fuga veniam alias excepturi sunt ullam
            accusantium, aut qui provident doloremque. Dolore obcaecati porro
            deserunt quae corrupti. Quos, nulla perferendis? Molestiae, corporis
            rerum in repellat itaque eaque ab ullam reiciendis. Magni illo
            molestiae, nemo numquam similique obcaecati recusandae odio
            assumenda sit dolores id at praesentium cum tempore dolore rerum
            dolorem laudantium porro? Dolores ea sed impedit laborum optio iste
            quaerat! Ullam et eos, obcaecati blanditiis nostrum, quia recusandae
            ducimus quos distinctio error voluptates minima.
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blog;
