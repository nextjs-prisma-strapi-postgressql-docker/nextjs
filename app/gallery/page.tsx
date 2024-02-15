import React from "react";
import { api } from "@/libs/api";
import { PaintingCard } from "@/components/PaintingCard";

export default async function Gallery() {
  const { data } = await api.get("paintings");

  return (
    <div className="mb-9">
      <div className="my-9 text-3xl">
        <h2 className="text-center">Gallery</h2>
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap gap-8">
        {data.map((painting) => (
          <PaintingCard
            key={painting.id}
            title={painting.attributes.Title}
            image={painting.attributes.Images.data[0].attributes.formats.small}
          />
        ))}
      </div>
    </div>
  );
}
