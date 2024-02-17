import { api } from "@/libs/api";
import Image from "next/image";
import React from "react";

const GalleryItem = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { data } = await api.getPaintingById(id);

  return (
    <div>
      <h1 className="text-4xl text-center mb-9">{data.attributes.Title}</h1>

      <div className="flex">
        <Image
          src={data.attributes.Images.data[0].attributes.formats.medium.url}
          alt={data.attributes.Title}
          width={data.attributes.Images.data[0].attributes.formats.medium.width}
          height={
            data.attributes.Images.data[0].attributes.formats.medium.height
          }
        />

        <div>
          {data.attributes.Description !== null && (
            <p className="mb-6">{data.attributes.Description}</p>
          )}
          {(data.attributes.Height !== null ||
            data.attributes.Width !== null) && (
            <div className="flex gap-9">
              {data.attributes.Height !== null && (
                <div>
                  Height <span>{data.attributes.Height}</span>
                </div>
              )}

              {data.attributes.Width !== null && (
                <div>
                  Width <span>{data.attributes.Width}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
