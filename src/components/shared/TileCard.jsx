import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
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
  } = tile;
  return (
    <Card>
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px] mx-auto">
        <Image src={"/logo.png"} alt="logo" fill />
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
          <Button className="w-full sm:w-auto">View Detail</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TileCard;
