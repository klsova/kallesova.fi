"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaFolder, FaBook } from "react-icons/fa";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathSuffix = pathname === "/" ? "" : pathname;
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <nav className="navbar-taskbar">
      <div className="prompt">
        <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="prompt-user">kallesova@mysite</span>
            <span className="prompt-symbol">:</span>
            <span className="prompt-path">~</span>

            <span className="path-slider">
                <span className="path-content">{pathSuffix}</span>
            </span>

            <span className="prompt-symbol">$</span>
            <span className="cursor">_</span>
        </Link>
    </div>

    <div style={{ display: "flex", gap: "10px", alignItems: 'center' }}>
        <Link href="/works" className="nav-btn">
            <FaFolder style={{ fontSize: '0.9rem' }}/> Works
        </Link>
        <Link href="/blog" className="nav-btn">
            <FaBook style={{ fontSize: '0.9rem' }}/> Blog
        </Link>

        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle Dark Mode"
        >
          <FaSun
            className={`theme-icon ${isDark ? 'icon-visible' : 'icon-hidden'}`}
          />
          <FaMoon
            className={`theme-icon ${!isDark ? 'icon-visible' : 'icon-hidden'}`}
          />
        </button>
      </div>
    </nav>
  );
}
