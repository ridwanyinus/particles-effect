import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
const ParticlesEffect = dynamic(() => import("@/components/ParticlesEffect"), { ssr: false });

const page = () => {
  return (
    <div className="relative h-screen w-full">
      <ParticlesEffect />
      <div className="relative flex  flex-col justify-center items-center  bg-white py-1 w-1/2 mx-auto ">
        <h1 className="text-black text-2xl font-semibold tracking-wide">Created by Ridwan</h1>
        <Link rel="stylesheet" href="https://github.com/ridwanyinus/particles-effect" className="flex py-3 gap-x-1 hover:underline">
          Link to github repo <FaGithub size={20} />
        </Link>
      </div>
    </div>
  );
};

export default page;
