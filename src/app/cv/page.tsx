import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { FaJava, FaDatabase, FaTerminal, FaCloud } from "react-icons/fa";
import {
  SiPython, SiTypescript, SiRust, SiHtml5, SiCss3, SiReact,
  SiNextdotjs, SiTailwindcss, SiGit,
  SiNeovim, SiDocker, SiLinux, SiUbuntu, SiSupabase
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const metadata: Metadata = {
  title: "CV | Kalle Sova",
  description: "Curriculum vitae of Kalle Sova.",
};

const timeline = [
  {
    year: "2022",
    event: (
      <>
        Started my bachelor&apos;s degree in{" "}
        <Link href="https://www.utu.fi/en/study-at-utu/bachelors-degree-programme-in-information-and-communication-technology">
          Information and Communication Technologies
        </Link>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        My year as the Chairperson of <Link href="https://digit.fi/">Digit ry</Link>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Research Assistant at <Link href="https://www.oppimisanalytiikka.fi/">TRILA</Link>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Graduated my bachelor&apos;s degree and started my master&apos;s studies in{" "}
        <Link href="https://www.utu.fi/en/study-at-utu/masters-degree-programme-in-information-and-communication-technology-data-analytics">
          Data-Analytics, Information and Communications Technologies
        </Link>
      </>
    ),
  },
  {
    year: "2026",
    event: (
      <>
        Started my work as a research assistant at the University of Turku in the Biological Department <Link href="https://www.lummaalab.utu.fi/">LummaaLab</Link>
      </>
    ),
  },
  {
    year: "2026",
    event: (
      <>
        Started my second master&apos;s degree in <Link href="https://www.aalto.fi/en/study-options/international-design-business-management-master-of-science-technology">International Design Business Management at Aalto University</Link>
      </>
    ),
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiRust />, name: "Rust" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    label: "Web",
    items: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Tools",
    items: [
      { icon: <SiGit />, name: "Git" },
      { icon: <VscVscode />, name: "VSCode" },
      { icon: <SiNeovim />, name: "Neovim" },
      { icon: <FaTerminal />, name: "Claude Code" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiLinux />, name: "Linux" },
    ],
  },
  {
    label: "Familiar with",
    items: [
      { icon: <FaCloud />, name: "Azure" },
      { icon: <SiUbuntu />, name: "Ubuntu LTS" },
      { icon: <SiSupabase />, name: "Supabase" },
    ],
  },
];

export default function CV() {
  return (
    <main className="container">
      <div className="page-header">
        <span className="eyebrow page-eyebrow">CV</span>
        <h1 className="page-title">Curriculum Vitae</h1>
        <p className="page-intro">Education, experience, and the tools I work with.</p>
        <Link href="/cv.pdf" target="_blank" className="btn">
          Download PDF
        </Link>
      </div>

      <section className="cv-block">
        <h2 className="eyebrow cv-block-title">Education &amp; Experience</h2>
        <div className="cv-timeline">
          {timeline.map((item, index) => (
            <Fragment key={index}>
              <div className="cv-year">{item.year}</div>
              <div className="cv-event">{item.event}</div>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="cv-block">
        <h2 className="eyebrow cv-block-title">Skills</h2>
        {skillGroups.map((group) => (
          <div key={group.label} className="cv-skills-group">
            <span className="cv-skills-label">{group.label}</span>
            <div className="cv-skills-list">
              {group.items.map((item) => (
                <span key={item.name} className="cv-skill-item">
                  {item.icon} {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
