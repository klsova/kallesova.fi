"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaFolder } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav>
      <div className="prompt">
        <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="prompt-user">kallesova@mysite</span>
            <span className="prompt-symbol">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
            <span className="cursor">_</span>
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Works Button */}
        <Link href="/works" className="nav-btn">
          <FaFolder style={{ fontSize: '0.9rem' }}/> Works
        </Link>

        {/* Theme Toggle Button */}
        <button
          className="nav-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}