"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const links = [
  { href: "/about", label: "About" },
  { href: "/photography", label: "Photography" },
  { href: "/music", label: "Music" },
  { href: "/works", label: "Works" },
  { href: "/cv", label: "CV" },
];

export default function Sidebar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration-safe mount guard
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <aside className="sidebar">
      <Link href="/" className="sidebar-logo" aria-label="Kalle Sova — Home">
        <Image src="/KS.png" alt="Kalle Sova" width={160} height={160} className="sidebar-logo-img" priority />
      </Link>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`sidebar-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="sidebar-theme-btn"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Dark Mode"
      >
        <span className="sidebar-theme-icon-box">
          <FaSun className={`theme-icon ${isDark ? "icon-visible" : "icon-hidden"}`} />
          <FaMoon className={`theme-icon ${!isDark ? "icon-visible" : "icon-hidden"}`} />
        </span>
        <span>{isDark ? "Dark" : "Light"}</span>
      </button>
    </aside>
  );
}
