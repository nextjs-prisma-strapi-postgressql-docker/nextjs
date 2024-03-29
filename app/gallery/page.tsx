import React from "react";
import { api } from "@/libs/api";
import { PaintingCard } from "@/components/PaintingCard";

const Gallery = async () => {
  const { data } = await api.getPaintings();

  return (
    <div className="mb-9">
      <div className="my-9 text-3xl">
        <h2 className="text-center">Gallery</h2>
      </div>
      <div className="mx-auto grid grid-cols-4 gap-4">
        {data.map((painting) => (
          <PaintingCard
            key={painting.id}
            id={painting.id}
            title={painting.attributes.Title}
            image={painting.attributes.Images.data[0].attributes.formats.small}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
