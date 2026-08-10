import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <Image
        src={"/banner.png"}
        alt="banner image"
        fill
        className=" object-center object-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-blue-500">
          Discover Your Perfect Aesthetic
        </h1>
        <Button variant="secondary">
          <span className="sm:text-lg">Browse Now</span>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
