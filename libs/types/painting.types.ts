export type PaintingDTO = { data: Painting[] };

interface Painting {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  Title: string;
  Description: string;
  Height: string;
  Width: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Images: { data: Image[] };
}

interface Image {
  id: number;
  attributes: ImageAttributes;
}

interface ImageAttributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large: SizesImage;
  small: SizesImage;
  medium: SizesImage;
  thumbnail: SizesImage;
}

export interface SizesImage {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}
