import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Kalle Sova",
  description: "Projects and works by Kalle Sova.",
};

const projects = [
  {
    title: "Hybrid Recommend",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Numpy", "Scikit-learn"],
    desc: "Movie recommendation application based on a hybrid model approach of content based and collaborative ML models.",
    link: "https://github.com/klsova/hybridrecommend/"
  },
  {
    title: "Poro",
    tech: ["TypeScript", "Next.js", "Supabase"],
    desc: "A gamified pomodoro and kanban web application",
    link: "https://github.com/klsova/poro/"
  },
    {
    title: "Rust-editor",
    tech: ["Rust", "Crossterm", "Unicode-segmentation"],
    desc: "A vim-like text editor made in Rust.",
    link: "https://github.com/klsova/rust-editor/"
  },

];

export default function Works() {
  return (
    <main className="container">
      <div className="page-header">
        <span className="eyebrow page-eyebrow">Works</span>
        <h1 className="page-title">Selected Projects</h1>
        <p className="page-intro">A few things I&apos;ve built, mostly on the side.</p>
      </div>

      <div className="page-list">
        {projects.map((project, index) => (
          <article key={index} className="page-item">
            <Link href={project.link} target="_blank" className="page-item-link">
              <h2 className="page-item-name">{project.title}</h2>
              <p className="page-item-desc">{project.desc}</p>
              {project.tech.length > 0 && (
                <div className="page-item-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="page-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
