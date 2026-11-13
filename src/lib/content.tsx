import Link from "next/link";
import type { ReactNode } from "react";

export const GITHUB_USERNAME = "klsova";

export const socials = [
  { label: "GitHub", href: "https://github.com/klsova" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kalle-sova-5b4616292/" },
  { label: "Telegram", href: "https://t.me/kalleleonard" },
] as const;

export interface Project {
  title: string;
  tagline: string;
  points: string[];
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "hybrid recommend",
    tagline: "movie recommendations from a hybrid of content-based and collaborative models.",
    points: [
      "Combines a content-based model with collaborative filtering into one hybrid recommender.",
      "Exploration, feature engineering and evaluation done in Jupyter notebooks.",
    ],
    tech: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/klsova/hybridrecommend/",
  },
  {
    title: "poro",
    tagline: "a gamified pomodoro timer and kanban board in one web app.",
    points: [
      "Pomodoro focus sessions tied to tasks on a kanban board.",
      "Gamification layer to keep the streak going.",
      "Auth and persistence on Supabase.",
    ],
    tech: ["TypeScript", "Next.js", "Supabase"],
    github: "https://github.com/klsova/poro/",
  },
  {
    title: "rust-editor",
    tagline: "a vim-like text editor for the terminal, written in Rust.",
    points: [
      "Modal editing inspired by vim.",
      "Terminal rendering with Crossterm and grapheme-aware cursor movement.",
    ],
    tech: ["Rust", "Crossterm", "Unicode-segmentation"],
    github: "https://github.com/klsova/rust-editor/",
  },
  {
    title: "kallesova.fi",
    tagline: "this site.",
    points: ["Single-page portfolio with a live GitHub contribution graph and light/dark themes."],
    tech: ["TypeScript", "Next.js", "CSS"],
    github: "https://github.com/klsova/kallesova.fi",
  },
];

export interface Track {
  title: string;
  year: string;
  desc: string;
  link?: string;
}

export const tracks: Track[] = [
  {
    title: "blue birds",
    year: "2026",
    desc: "a hopeful sounding house track.",
    link: "https://soundcloud.com/dj_keskikalja/kalle-haus-blue-birds",
  },
];

export const timeline: { year: string; event: ReactNode }[] = [
  {
    year: "2026",
    event: (
      <>
        Started a second master&apos;s in{" "}
        <Link href="https://www.aalto.fi/en/study-options/international-design-business-management-master-of-science-technology">
          International Design Business Management
        </Link>{" "}
        at Aalto University
      </>
    ),
  },
  {
    year: "2026",
    event: (
      <>
        Research assistant at <Link href="https://www.lummaalab.utu.fi/">LummaaLab</Link>, Department of Biology,
        University of Turku
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Bachelor&apos;s degree done; started a master&apos;s in{" "}
        <Link href="https://www.utu.fi/en/study-at-utu/masters-degree-programme-in-information-and-communication-technology-data-analytics">
          Data Analytics, ICT
        </Link>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Research assistant at <Link href="https://www.oppimisanalytiikka.fi/">TRILA</Link>
      </>
    ),
  },
  {
    year: "2025",
    event: (
      <>
        Chairperson of <Link href="https://digit.fi/">Digit ry</Link>
      </>
    ),
  },
  {
    year: "2022",
    event: (
      <>
        Started a bachelor&apos;s in{" "}
        <Link href="https://www.utu.fi/en/study-at-utu/bachelors-degree-programme-in-information-and-communication-technology">
          Information and Communication Technology
        </Link>
      </>
    ),
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "languages", items: ["Python", "TypeScript", "Rust", "SQL", "Java"] },
  { label: "web", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "tools", items: ["Git", "Neovim", "VS Code", "Claude Code", "Docker", "Linux"] },
  { label: "familiar with", items: ["Azure", "Ubuntu LTS", "Supabase"] },
];
