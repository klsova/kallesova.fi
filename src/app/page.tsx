import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa";
import LocationCard from "../components/LocationCard";

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
            Python, Rust, Linux, Vim, AI/ML
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
          <LocationCard 
            city="Turku" 
            country="FI"
            timezone="Europe/Helsinki"
            lat={60.45}
            lng={22.27}
          />
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