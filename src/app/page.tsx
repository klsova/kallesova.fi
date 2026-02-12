import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode, FaTelegram, FaJava, FaDatabase, FaTerminal, FaCloud } from "react-icons/fa";
import {
  SiPython, SiTypescript, SiRust, SiHtml5, SiCss3, SiReact,
  SiNextdotjs, SiTailwindcss, SiGit,
  SiNeovim, SiDocker, SiLinux, SiUbuntu, SiSupabase
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import LocationCard from "../components/LocationCard";
import RecentCommits from "../components/RecentCommits";
import WindowFrame from "../components/WindowFrame";
import PixelDecorations from "../components/PixelDecorations";

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Header / Hero */}
        <WindowFrame title="kalle_sova.exe">
          <header>
            <div>
              <h1>Kalle<br />Sova</h1>
              <div className="subtitle">Student / Developer</div>
              <div className="text">Turku</div>
              <div className="hero-socials">
                <Link href="https://github.com/klsova" target="_blank" aria-label="GitHub"><FaGithub /></Link>
                <Link href="https://www.linkedin.com/in/kalle-sova-5b4616292/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
                <Link href="https://t.me/kalleleonard" target="_blank" aria-label="Telegram"><FaTelegram /></Link>
              </div>
            </div>
            <Image
              src="/kalle1.png"
              alt="Profile Picture"
              width={120}
              height={120}
              className="profile-pic"
              priority
            />
          </header>
        </WindowFrame>

        {/* About Me */}
        <WindowFrame title="about.txt">
          <h2>About Me</h2>
          <p>
            I&apos;m a master's student currently working as a research assistant at the Turku Research Institute of Learning Analytics.
            Currently studying low-level programming and machine learning methods.
          </p>
          <Link href="/works" className="btn">
            My Works &gt;
          </Link>
        </WindowFrame>

        {/* I Like */}
        <WindowFrame title="favorites.conf">
          <h2>I Like</h2>
          <p>
            Python, Rust, C, TypeScript, Linux, NeoVim
          </p>
        </WindowFrame>

        <WindowFrame title="skills.sys">
          <h2>Skills</h2>

          <h3 className="skill-category">Languages</h3>
          <div className="skill-grid">
            <div className="skill-chip"><SiPython /> Python</div>
            <div className="skill-chip"><SiTypescript /> TypeScript</div>
            <div className="skill-chip"><SiRust /> Rust</div>
            <div className="skill-chip"><FaDatabase /> SQL</div>
            <div className="skill-chip"><FaJava /> Java</div>
          </div>

          <h3 className="skill-category">Web</h3>
          <div className="skill-grid">
            <div className="skill-chip"><SiHtml5 /> HTML5</div>
            <div className="skill-chip"><SiCss3 /> CSS3</div>
            <div className="skill-chip"><SiReact /> React</div>
            <div className="skill-chip"><SiNextdotjs /> Next.js</div>
            <div className="skill-chip"><SiTailwindcss /> Tailwind CSS</div>
          </div>

          <h3 className="skill-category">Tools</h3>
          <div className="skill-grid">
            <div className="skill-chip"><SiGit /> Git</div>
            <div className="skill-chip"><VscVscode /> VSCode</div>
            <div className="skill-chip"><SiNeovim /> Neovim</div>
            <div className="skill-chip"><FaTerminal /> Claude Code</div>
            <div className="skill-chip"><SiDocker /> Docker</div>
            <div className="skill-chip"><SiLinux /> Linux</div>
          </div>

          <h3 className="skill-category">Familiar with</h3>
          <div className="skill-grid">
            <div className="skill-chip"><FaCloud /> Azure</div>
            <div className="skill-chip"><SiUbuntu /> Ubuntu LTS</div>
            <div className="skill-chip"><SiSupabase /> Supabase</div>
          </div>
        </WindowFrame>

        {/* Bio / Timeline */}
        <WindowFrame title="bio.log">
          <h2>Bio</h2>
          <div className="timeline-grid">

            <div className="year">2022</div>
            <div className="event">
              Started my bachelor's degree in <Link href="https://www.utu.fi/en/study-at-utu/bachelors-degree-programme-in-information-and-communication-technology">Information and Communication Technologies</Link>
            </div>

            <div className="year">2025</div>
            <div className="event">
              My year as the Chairperson of <Link href="https://digit.fi/">Digit ry</Link>
            </div>

            <div className="year">2025</div>
            <div className="event">
              Research Assistant at <Link href="https://www.oppimisanalytiikka.fi/">TRILA</Link>
            </div>

            <div className="year">2025</div>
            <div className="event">
              Graduated my bachelor's degree and started my master's studies in <Link href="https://www.utu.fi/en/study-at-utu/masters-degree-programme-in-information-and-communication-technology-data-analytics">Data-Analytics, Information and Communications Technologies</Link>
            </div>

            <div className="year">2027</div>
            <div className="event">
              Estimated MSc graduation at <Link href="https://www.utu.fi/en">University of Turku</Link>
            </div>
          </div>
        </WindowFrame>

        <WindowFrame title="dashboard.app">
          <div className="dashboard-grid">
            <LocationCard
              city="Turku"
              country="FI"
              timezone="Europe/Helsinki"
              lat={60.45}
              lng={22.27}
            />
            <RecentCommits />
          </div>
        </WindowFrame>

        {/* Socials */}
        <WindowFrame title="socials.lnk">
          <h2>Socials</h2>
          <ul className="social-list">
            <li>
              <FaGithub className="social-icon" />
              <Link href="https://github.com/klsova">github.com/klsova</Link>
            </li>
            <li>
              <FaLinkedin className="social-icon" />
              <Link href="https://www.linkedin.com/in/kalle-sova-5b4616292/">linkedin.com/in/kalle-sova-5b4616292</Link>
            </li>
            <li>
              <FaCode className="social-icon" />
              <Link href="https://leetcode.com/u/klsova/">https://leetcode.com/u/klsova/</Link>
            </li>
          </ul>
        </WindowFrame>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "4rem", color: "var(--dim-color)" }}>
          <FaGithub style={{ marginRight: "5px" }} />
          <Link href="https://github.com/klsova/kallesova.fi" style={{ color: "var(--text-color)" }}>Source</Link>
        </footer>
      </div>

      <PixelDecorations />
    </main>
  );
}
