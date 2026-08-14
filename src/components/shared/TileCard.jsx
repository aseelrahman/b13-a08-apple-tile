import { Button, Card, Chip, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  const {
    title,
    description,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock,
    id,
    image,
  } = tile;
  return (
    <Card className="relative">
      <Chip className="absolute top-3 right-4 z-10">{category.toUpperCase()}</Chip>
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px] mx-auto">
        <Image src={image} alt="logo" fill />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8">{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {`${currency} ${price}`}
            </span>
            <span className="text-xs text-muted">{dimensions}</span>
          </div>
          <Link href={`tiles/${id}`}>
            <Button className="w-full sm:w-auto">View Detail</Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TileCard;
