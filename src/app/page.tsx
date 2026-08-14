import Image from "next/image";
import { photos } from "@/lib/photos";

export default function Home() {
  return (
    <main>
      <div className="collage">
        {photos.slice(0, 6).map((photo, index) => (
          <div key={index} className="collage-item" style={{ aspectRatio: photo.ratio }}>
            {photo.src ? (
              <Image src={photo.src} alt={photo.caption} fill style={{ objectFit: "cover" }} />
            ) : (
              <span>Image</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
