import Image from "next/image";
import { Fragment } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FiChevronDown, FiCode, FiMusic } from "react-icons/fi";
import Contributions from "@/components/Contributions";
import Tabs from "@/components/Tabs";
import ThemeToggle from "@/components/ThemeToggle";
import { projects, skills, socials, timeline, tracks } from "@/lib/content";
import { photos } from "@/lib/photos";

const socialIcons = { GitHub: FaGithub, LinkedIn: FaLinkedin, Telegram: FaTelegram };

function Works() {
  return (
    <div className="cards">
      {projects.map((p, i) => (
        <details key={p.title} className="card" open={i === 0}>
          <summary>
            <span className="card-icon" aria-hidden>
              <FiCode />
            </span>
            <span className="card-title">{p.title}</span>
            {p.live && <span className="live-dot" title="live" />}
            <FiChevronDown className="chevron" aria-hidden />
          </summary>
          <div className="card-body">
            <p className="card-tagline">{p.tagline}</p>
            <ul className="card-points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="card-links">
              {p.github && <a href={p.github}>github</a>}
              {p.live && <a href={p.live}>view</a>}
            </div>
            <p className="card-tech">{p.tech.join(" / ")}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

function Photography() {
  return (
    <div className="photos">
      {photos.map((photo) =>
        photo.src ? (
          <a key={photo.src} href={photo.src} className="photo" style={{ aspectRatio: photo.ratio }}>
            <Image
              src={photo.src}
              alt={photo.caption || "Photograph by Kalle Sova"}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              style={{ objectFit: "cover" }}
            />
          </a>
        ) : null,
      )}
    </div>
  );
}

function Music() {
  return (
    <div className="cards">
      {tracks.map((t) => (
        <div key={t.title} className="row">
          <span className="card-icon" aria-hidden>
            <FiMusic />
          </span>
          <div className="row-main">
            <span className="card-title">{t.title}</span>
            <span className="row-desc">{t.desc}</span>
          </div>
          <span className="row-meta">{t.year}</span>
          {t.link && <a href={t.link}>listen</a>}
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <>
      <div className="timeline">
        {timeline.map((item, i) => (
          <Fragment key={i}>
            <span className="timeline-year">{item.year}</span>
            <span className="timeline-event">{item.event}</span>
          </Fragment>
        ))}
      </div>
      <h2 className="subhead">skills</h2>
      <dl className="skills">
        {skills.map((g) => (
          <Fragment key={g.label}>
            <dt>{g.label}</dt>
            <dd>{g.items.join(" · ")}</dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="intro">
        <Image src="/kalle1.png" alt="Kalle Sova" width={88} height={88} className="avatar" priority />
        <div className="intro-text">
          <h1>hey, i&apos;m kalle!</h1>
          <p className="role">developer, photographer &amp; occasional musician · turku / helsinki</p>
        </div>
        <ThemeToggle />
      </header>

      <p className="bio">
        master&apos;s student and research assistant at the University of Turku, now also studying at Aalto. outside
        of work i shoot film, write, and make music.
      </p>

      <nav className="socials" aria-label="Social links">
        {socials.map((s) => {
          const Icon = socialIcons[s.label];
          return (
            <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
              <Icon />
            </a>
          );
        })}
      </nav>

      <Contributions />

      <Tabs
        tabs={[
          { id: "works", label: "works", content: <Works /> },
          { id: "photography", label: "photography", content: <Photography /> },
          { id: "music", label: "music", content: <Music /> },
          { id: "experience", label: "experience", content: <Experience /> },
        ]}
      />

      <footer className="footer">
        <a href="https://github.com/klsova/kallesova.fi">source</a>
      </footer>
    </main>
  );
}
