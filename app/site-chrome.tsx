import Link from "next/link";

/** Persistent site navigation displayed above every page. */
export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/"><span>✣</span> GK_Organic</Link>
      <nav aria-label="Primary navigation">
        <Link href="/products">Shop</Link>
        <Link href="/about">Our story</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <details className="account-menu">
        <summary aria-label="Open account menu">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M4.5 20c.8-3.4 3.4-5.5 7.5-5.5s6.7 2.1 7.5 5.5" />
          </svg>
          <span>Account</span>
        </summary>
        <div className="account-menu-panel">
          {/* Replace Guest with the signed-in user's name when authentication is connected. */}
          <p>Hello, <strong>Guest</strong></p>
          <Link href="/account">View account <span>→</span></Link>
        </div>
      </details>
    </header>
  );
}

/** Persistent footer containing brand links and placeholder business details. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div><Link className="brand" href="/"><span>✣</span> GK_Organic</Link><p>Plant-rich care for every day.</p></div>
      <div className="footer-links"><Link href="/products">Shop all</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
      <p className="copyright">© 2026 GK_Organic<br />Made with care in California</p>
    </footer>
  );
}
