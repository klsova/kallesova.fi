import Link from "next/link";

const projects = [
  {
    title: "Hybrid Recommend",
    tech: "Python, Jupyter Notebook, Pandas, Numpy, Scikit-learn",
    desc: "Movie recommendation application based on a hybrid model approach of content based and collaborative ML models.",
    link: "https://github.com/klsova/hybridrecommend/"
  },
  {
    title: "Rust-editor",
    tech: "Rust, Crossterm, Unicode-segmentation",
    desc: "A vim-like text editor made in Rust.",
    link: "https://github.com/klsova/rust-editor/"
  },
  {
    title: "CivSwipe",
    tech: "JavaScript, React, Express",
    desc: "A solution to Sitra's challenge in Junction 2024 hackathon, making citizen-initatives more accessible to the average person.",
    link: "https://github.com/klsova/civswipe/"
  }
];

export default function Works() {
  return (
    <main className="container">
      <header>
        <div>
            {/* A "Terminal" command to show where we are */}
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>ls</span> -la ./works
            </h1>
            <div className="subtitle">Total {projects.length} projects found</div>
        </div>
      </header>

      <section>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
                border: '1px solid var(--dim-color)', 
                padding: '1.5rem',
                borderRadius: '8px',
                position: 'relative'
            }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {project.title}
              </h3>
              <div style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--bg-color)', 
                  background: 'var(--dim-color)', 
                  display: 'inline-block',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginBottom: '1rem'
              }}>
                {project.tech}
              </div>
              <p>{project.desc}</p>
              
              <Link href={project.link} target="_blank" className="btn">
                View Source &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: '3rem' }}>
        <Link href="/" style={{ color: 'var(--dim-color)' }}>
            cd .. <span style={{ fontSize: '0.8rem' }}>(Back to home)</span>
        </Link>
      </div>
    </main>
  );
}