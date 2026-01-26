import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaCode, FaTelegram } from "react-icons/fa";
import LocationCard from "../components/LocationCard";
import RecentCommits from "../components/RecentCommits";

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Header / Hero */}
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

        {/* About Me */}
        <section>
          <h2>About Me</h2>
          <p>
            I&apos;m a master's student currently working as a research assistant at the Turku Research Institute of Learning Analytics. 
            Currently studying about ML infrastructure and different AI models.
          </p>
          <Link href="/works" className="btn">
            My Works &gt;
          </Link>
        </section>

        {/* I Like */}
        <section>
          <h2>I Like</h2>
          <p>
            Python, Rust, C, TypeScript, Linux, Vim
          </p>
        </section>

        <section>
          <h2>Skills</h2>
            <h3>Primary Languages:</h3>
              <p>
                Python, TypeScript, Rust, SQL, Java
              </p>
            <h3>Web Technologies:</h3>
              <p>
                HTML5, CSS3, React, Next.js, Tailwind CSS
              </p>
            <h3>Tools:</h3>
              <p>
                Git, VSCode, Neovim, Claude Code, Docker, Linux
              </p>
            <h3>Familiar with:</h3>
              <p>
                Azure, Ubuntu LTS, Supabase
              </p>
        </section>

        {/* Bio / Timeline */}
        <section>
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
        </section>

        <section>
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
        </section>

        {/* Socials */}
        <section>
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
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "4rem", color: "var(--dim-color)" }}>
          <FaGithub style={{ marginRight: "5px" }} /> 
          <Link href="https://github.com/klsova/kallesova.fi" style={{ color: "var(--text-color)" }}>Source</Link>
        </footer>
      </div>
    </main>
  );
}