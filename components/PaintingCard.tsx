import { SizesImage } from "@/libs/types/painting.types";
import Image from "next/image";
import React from "react";

export const PaintingCard = ({
  title,
  image,
}: {
  title: string;
  image: SizesImage;
}) => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="h-96 w-full">
        <Image
          className="object-cover h-full w-full"
          src={image.url}
          width={image.width}
          height={image.height}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
};
