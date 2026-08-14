import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photography | Kalle Sova",
  description: "Photography by Kalle Sova.",
};

export default function Photography() {
  return (
    <main className="container gallery-page">
      <div className="page-header">
        <span className="eyebrow page-eyebrow">Photography</span>
        <h1 className="page-title">Photos</h1>
        <p className="page-intro">
          A slowly growing set of photographs. Mostly shot on film, some digitally.
        </p>
      </div>

      <div className="gallery">
        {photos.map((photo, index) => (
          <figure key={index}>
            <div className="gallery-figure" style={{ aspectRatio: photo.ratio }}>
              {photo.src ? (
                <Image src={photo.src} alt={photo.caption} fill style={{ objectFit: "cover" }} />
              ) : (
                <span>Image</span>
              )}
            </div>
            <figcaption className="gallery-caption">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
