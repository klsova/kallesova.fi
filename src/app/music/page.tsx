import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Kalle Sova",
  description: "Music by Kalle Sova.",
};

const tracks = [
  {
    title: "Blue Birds",
    year: "2026",
    desc: "A hopeful sounding house track.",
    link: "https://soundcloud.com/dj_keskikalja/kalle-haus-blue-birds?si=2ae1fe47235d44529c91050272bb20a7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
];

export default function Music() {
  return (
    <main className="container">
      <div className="page-header">
        <span className="eyebrow page-eyebrow">Music</span>
        <h1 className="page-title">Music</h1>
        <p className="page-intro">
          Sketches, demos, and the occasional finished track. More to come hopefully.
        </p>
      </div>

      <div className="track-list">
        {tracks.map((track) => (
          <div key={track.title} className="track-item">
            <div className="track-main">
              <h2 className="track-title">{track.title}</h2>
              <p className="track-desc">{track.desc}</p>
            </div>
            <span className="track-meta">{track.year}</span>
            {track.link ? (
              <Link href={track.link} target="_blank" className="track-link">
                Listen &#8599;
              </Link>
            ) : (
              <span className="track-link">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
