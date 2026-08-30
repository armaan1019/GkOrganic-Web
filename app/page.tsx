import Image from "next/image";
import Link from "next/link";
import { FeaturedProducts, Newsletter, SectionHeading } from "./components";

const categories = [
  { name: "Botanical oils", image: "/images/oil.svg", alt: "Illustration of botanical oil", className: "category-card-tall" },
  { name: "Handcrafted soaps", image: "/images/soap.svg", alt: "Illustration of handmade soap bars", className: "" },
  { name: "Bath rituals", image: "/images/bath.svg", alt: "Illustration of botanical bath essentials", className: "" },
];

/** Home page: introduces the brand, categories, and most-loved products. */
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Slow rituals for every day</p>
          <h1>Made from the<br /><em>earth, with care.</em></h1>
          <p className="hero-text">Small-batch soaps and botanical oils, crafted to make your daily rituals feel a little more grounded.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/products">Shop the collection <span>→</span></Link>
            <Link className="text-link" href="/about">Our story <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="sun-disc" />
          <div className="hero-arch">
            <Image fill priority sizes="(max-width: 700px) 100vw, 50vw" src="/images/botanical-hero.svg" alt="Illustration of natural soap and botanicals" />
          </div>
          <p className="hero-note">Nurtured by nature<br />since 2016</p>
          <div aria-hidden="true" className="leaf-sprig">❧</div>
        </div>
      </section>

      <section className="value-strip" aria-label="GK Organic values">
        <p>Plant-powered ingredients</p><span>✦</span><p>Made by hand in California</p><span>✦</span><p>Always cruelty free</p>
      </section>

      <section className="section collection-intro">
        <SectionHeading eyebrow="The collection" title={<>Little luxuries, made <em>natural.</em></>} body="Thoughtfully formulated essentials for your skin, your senses, and the small moments in between." />
        <div className="category-grid">
          {categories.map((category) => (
            <Link className={`category-card ${category.className}`} href="/products" key={category.name}>
              <Image fill sizes="(max-width: 700px) 100vw, 33vw" src={category.image} alt={category.alt} />
              <span>{category.name} <b>→</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section ritual-section">
        <div className="ritual-image"><Image fill sizes="(max-width: 700px) 100vw, 50vw" src="/images/oil.svg" alt="Illustration of a botanical skincare ritual" /></div>
        <div className="ritual-copy">
          <p className="eyebrow">A gentler way</p>
          <h2>Your skin knows<br />what <em>simple</em> feels like.</h2>
          <p>We believe that care is found in the everyday: a warm shower, a favorite scent, a few unhurried minutes just for you.</p>
          <Link className="button button-outline" href="/about">Meet GK_Organic <span>→</span></Link>
        </div>
      </section>

      <section className="section featured-section">
        <SectionHeading eyebrow="Most loved" title={<>The everyday <em>essentials.</em></>} />
        <FeaturedProducts />
        <div className="center"><Link className="text-link" href="/products">See all products <span>→</span></Link></div>
      </section>
      <Newsletter />
    </>
  );
}
