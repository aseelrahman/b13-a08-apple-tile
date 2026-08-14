import Category from "@/components/shared/Category";
import TileCard from "@/components/shared/TileCard";
import { getTiles } from "@/lib/data";
import React from "react";

const Tiles = async ({searchParams}) => {
  const tiles = await getTiles();
  
  const {category} = await searchParams;
  const filteredTiles = category ? tiles.filter(filteredTile => category === filteredTile.category.toLowerCase()) : tiles
  


  return (
    <div className="my-20">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-sky-500 text-center mb-5">
        All Tiles
      </h1>

      <Category />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredTiles.map((tile) => {
          return <TileCard key={tile.id} tile={tile} />;
        })}
      </div>
    </div>
  );
};

export default Tiles;
