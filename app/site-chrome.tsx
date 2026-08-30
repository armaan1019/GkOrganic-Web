"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SignedInUser = { name: string };

function getCurrentUser(): SignedInUser | null {
  // Replace this with the session lookup once authentication is connected.
  return null;
}

function AccountIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c.8-3.4 3.4-5.5 7.5-5.5s6.7 2.1 7.5 5.5" />
    </svg>
  );
}

/** Persistent site navigation displayed above every page. */
export function Header() {
  const user = getCurrentUser();
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/"><span>GK</span> Organic</Link>
      <nav aria-label="Primary navigation">
        <Link
          href="/products"
          style={{
            backgroundColor: isActive("/products") ? "rgba(0, 0, 0, 0.08)" : "transparent",
            padding: "0.5rem 0.75rem",
            borderRadius: "0.375rem",
            transition: "background-color 0.2s",
          }}
        >
          Shop
        </Link>
        <Link
          href="/about"
          style={{
            backgroundColor: isActive("/about") ? "rgba(0, 0, 0, 0.08)" : "transparent",
            padding: "0.5rem 0.75rem",
            borderRadius: "0.375rem",
            transition: "background-color 0.2s",
          }}
        >
          Our story
        </Link>
        <Link
          href="/contact"
          style={{
            backgroundColor: isActive("/contact") ? "rgba(0, 0, 0, 0.08)" : "transparent",
            padding: "0.5rem 0.75rem",
            borderRadius: "0.375rem",
            transition: "background-color 0.2s",
          }}
        >
          Contact
        </Link>
      </nav>
      {user ? (
        <details className="account-menu">
          <summary aria-label="Open account menu"><AccountIcon /><span>Account</span></summary>
          <div className="account-menu-panel">
            <p>Hello, <strong>{user.name}</strong></p>
            <Link href="/account">View account <span>→</span></Link>
          </div>
        </details>
      ) : (
        <Link className="account-link" href="/account" aria-label="Create an account"><AccountIcon /><span>Account</span></Link>
      )}
    </header>
  );
}

/** Persistent footer containing brand links and placeholder business details. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div><Link className="brand" href="/"><span>GK</span> Organic</Link><p>Organic oils and bamboo brushes for hair, lashes, and brows.</p></div>
      <div className="footer-links"><Link href="/products">Shop all</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
      <p className="copyright">© 2026 GK Organic</p>
    </footer>
  );
}
