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
      <Link className="cart" href="/products">Bag <span>(0)</span></Link>
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
