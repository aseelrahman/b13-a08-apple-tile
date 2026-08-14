import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch(
    "https://b13-a08-apple-tile.vercel.app/category.json",
  );
  const categories = await res.json();
  console.log(categories);

  return (
    <div className="max-w-7xl mx-auto mb-5 px-8 flex flex-wrap justify-center items-center gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}>
          <Button variant="outline" >
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
