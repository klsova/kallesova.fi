"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaFolder } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathSuffix = pathname === "/" ? "" : pathname;

  return (
    <nav>
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

        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Dark Mode"
        >
          <FaSun 
            className={`theme-icon ${mounted && theme === 'dark' ? 'icon-visible' : 'icon-hidden'}`} 
          />
          <FaMoon 
            className={`theme-icon ${mounted && theme === 'light' ? 'icon-visible' : 'icon-hidden'}`} 
          />
        </button>
      </div>
    </nav>
  );
}