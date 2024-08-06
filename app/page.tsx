import React from "react";
import dynamic from "next/dynamic";
const ParticlesEffect = dynamic(() => import("@/components/ParticlesEffect"), { ssr: false });

const page = () => {
  return (
    <div>
      <ParticlesEffect />
    </div>
  );
};

export default page;
