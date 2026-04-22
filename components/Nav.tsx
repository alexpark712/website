"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/writing") return pathname.startsWith("/writing");
    if (href === "/projects") return pathname.startsWith("/projects");
    return false;
  };

  return (
    <nav>
      <div className="nav-inner">
      <Link href="/" className="logo">
        Alex Park
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/writing" className={isActive("/writing") ? "active" : ""}>
            Writing
            <svg className="underline" viewBox="0 0 60 6" preserveAspectRatio="none">
              <path d="M0,4.5 C5,3.8 10,5.2 15,4.1 C20,3.0 25,5.0 30,3.8 C35,2.7 40,4.6 45,3.5 C50,2.4 55,4.2 60,3.0" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/projects" className={isActive("/projects") ? "active" : ""}>
            Projects
            <svg className="underline" viewBox="0 0 70 6" preserveAspectRatio="none">
              <path d="M0,4.5 C6,3.6 12,5.1 18,4.0 C24,2.9 30,5.0 36,3.7 C42,2.5 48,4.7 54,3.4 C60,2.2 65,4.4 70,3.1" />
            </svg>
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}
