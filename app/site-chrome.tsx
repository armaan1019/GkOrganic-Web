"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth";

type SignedInUser = { name: string };



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
  const pathname = usePathname();
  const [user, setUser] = useState<SignedInUser | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser({
          name:
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            user.email?.split("@")[0] ||
            "there",
        });
      } else {
        setUser(null);
      }
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          name:
            session.user.user_metadata?.full_name ||
            session.user.user_metadata?.name ||
            session.user.email?.split("@")[0] ||
            "there",
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await signOut();
    setAccountOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <Image
          src="/images/gk-logo.JPG"
          alt="GK Organic"
          width={150}
          height={60}
          priority
        />
        <span>GK</span> Organic
      </Link>
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
        <div className="account-menu" ref={accountMenuRef}>
          <button
            type="button"
            className="account-link"
            aria-label="Open account menu"
            aria-expanded={accountOpen}
            onClick={() => setAccountOpen((open) => !open)}
          >
            <AccountIcon />
            <span>Account</span>
          </button>

          {accountOpen && (
            <div className="account-menu-panel">
              <p>
                Hello, <strong>{user.name}</strong>
              </p>

              <Link href="/account" onClick={() => setAccountOpen(false)}>
                View account <span>→</span>
              </Link>

              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
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
