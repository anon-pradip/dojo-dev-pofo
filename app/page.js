import Image from "next/image";
import Link from "next/link";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row mt-6 justify-center items-center lg:justify-between w-full">
      {/* text container */}
      <div className="max-w-[30rem] flex flex-col gap-y-10">
        <h1 className=" bg-gradient-to-b from-green-500 to-green-200 text-transparent bg-clip-text text-6xl font-bold">
          Better design for your products.
        </h1>
        <p className="text-slate-400 dark:text-slate-600">
          Turning your ideas into reality. Our global network of talented
          professionals from the tech industry collaborate to deliver
          groundbreaking solutions that redefine industries and elevate user
          experiences.
        </p>

        <Link
          href={"/blog"}
          className=" bg-green-600 text-white px-4 py-2 max-w-max rounded-xl"
        >
          See our works
        </Link>
      </div>

      {/* image container */}
      <div>
        <Image
          src={Hero}
          height={400}
          width={400}
          className="image h-72 w-72 md:h-auto md:w-auto"
        />
      </div>
    </div>
  );
}
