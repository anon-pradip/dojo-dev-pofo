import Image from "next/image";
import React from "react";
import ContactImage from "public/contact.png";

export const metadata = {
  title: "Contact | DOJO",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div>
      <h1 className=" text-center text-6xl font-bold text-slate-800 dark:text-slate-300 py-6">
        Let's Keep in Touch
      </h1>
      <div className=" flex flex-col gap-x-11 lg:flex-row justify-between items-center">
        <div>
          <Image
            src={ContactImage}
            height={300}
            width={300}
            className="image"
          />
        </div>

        {/* Form */}
        <div>
          <div className="">
            <label htmlFor="name" className="block font-medium leading-6">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="name"
              />
            </div>
          </div>

          <div className=" mt-4">
            <label htmlFor="email" className="block font-medium leading-6">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className=" mt-4">
            <label htmlFor="message" className="block font-medium leading-6">
              Message
            </label>
            <div className="mt-2">
              <textarea
                name=""
                id=""
                placeholder="message"
                cols="30"
                rows="5"
                className="text-gray-900 rounded-md px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
