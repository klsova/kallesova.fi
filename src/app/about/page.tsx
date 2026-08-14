import Link from "next/link";
import type { Metadata } from "next";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | Kalle Sova",
  description: "About Kalle Sova.",
};

const sections = [
  {
    index: "01",
    title: "Photography",
    desc: "A collection of photos, mostly analog.",
    href: "/photography",
  },
  {
    index: "02",
    title: "Music",
    desc: "Recordings, sketches, and the occasional finished track.",
    href: "/music",
  },
  {
    index: "03",
    title: "Works",
    desc: "Selected software projects and experiments.",
    href: "/works",
  },
  {
    index: "04",
    title: "CV",
    desc: "Education, experience, and skills.",
    href: "/cv",
  },
];

export default function About() {
  return (
    <main>
      <div className="container">
        <header className="hero">
          <span className="eyebrow hero-eyebrow">Helsinki, Finland</span>
          <h1 className="hero-name">Kalle Sova</h1>
          <p className="hero-tagline">Developer, photographer, occasional musician.</p>
          <p className="hero-intro">
            I&apos;m a master&apos;s student and research assistant at the University of Turku.  Outside of work I shoot photos, write, and make music.
          </p>
          <div className="hero-socials">
            <Link href="https://github.com/klsova" target="_blank" aria-label="GitHub">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/kalle-sova-5b4616292/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://t.me/kalleleonard" target="_blank" aria-label="Telegram">
              <FaTelegram />
            </Link>
          </div>
        </header>

        <div className="teaser-grid">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="teaser">
              <span className="teaser-index">{section.index}</span>
              <span className="teaser-main">
                <h2 className="teaser-title">{section.title}</h2>
                <span className="teaser-desc">{section.desc}</span>
              </span>
              <span className="teaser-arrow">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      <footer className="site-footer">
        <Link href="https://github.com/klsova/kallesova.fi">Source</Link>
      </footer>
    </main>
  );
}
