import { getTileDetails, getTiles } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TileDetailPage = async ({ params }) => {
  const { id } = await params;
  const tiles = await getTiles();
  const tile = tiles.find((t) => t.id === id);
  console.log(tile);
  const {
    title,
    description,
    category,
    material,
    price,
    currency,
    dimensions,
    image,
    inStock,
  } = tile;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Left: image */}
      <div className="relative aspect-square w-full md:w-1/2 overflow-hidden rounded-xl bg-stone-100">
        <Image
          src={"/logo.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Right: details */}
      <div className="flex flex-col md:w-1/2">
        <span className="text-sm text-sky-500 font-medium capitalize">
          {category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-1">{title}</h1>
        <p className="text-stone-600 mt-3">{description}</p>

        <div className="mt-5 text-2xl font-semibold text-stone-900">
          {currency} {price}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-stone-700">
          <li>
            <span className="font-medium">Dimensions:</span> {dimensions}
          </li>
          <li>
            <span className="font-medium">Material:</span> {material}
          </li>
          <li>
            <span className="font-medium">Availability:</span>{" "}
            {inStock ? "In stock" : "Out of stock"}
          </li>
        </ul>

        <Button className="mt-8 w-full sm:w-auto" disabled={!inStock}>
          {inStock ? "Request a sample" : "Notify me when available"}
        </Button>
      </div>
    </div>
  );
};

export default TileDetailPage;
