import Image from "next/image";
import React from "react";
import AboutImage from "public/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* image and overlay */}
      <div>
        <div>
          <Image src={AboutImage} height={200} />
        </div>
      </div>

      {/* bottom two text containers */}
      <div></div>
    </div>
  );
};

export default About;
