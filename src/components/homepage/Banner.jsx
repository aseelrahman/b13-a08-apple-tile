import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Image src={"/banner.jpg"} alt="banner image" width={100} height={100} />
    </div>
  );
};

export default Banner;
