import { getTiles } from "@/lib/data";
import React from "react";
import TileCard from "../shared/TileCard";

const TopGenerations = async () => {
  const tiles = await getTiles();

  const topTiles = tiles.slice(0, 4);
  console.log(topTiles);

  return (
    <div className="my-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-sky-500 text-center mb-5">
        Our Most Popular Tiles
      </h1>
      <div className="max-w-7xl mx-8 sm:mx-10 md:mx-15 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topTiles.map((tile) => {
          return <TileCard key={tile.id} tile={tile} />;
        })}
      </div>
    </div>
  );
};

export default TopGenerations;
