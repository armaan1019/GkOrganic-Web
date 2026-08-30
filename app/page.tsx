import Image from "next/image";
import Link from "next/link";
import { FeaturedProducts, Newsletter, SectionHeading } from "./components";

const categories = [
  { name: "Organic hair oil", image: "/images/IMG_1215.JPG", alt: "Organic hair oil", className: "category-card-tall" },
  { name: "Lash oil", image: "/images/IMG_1216.JPG", alt: "Nourishing lash oil", className: "category-card-tall" },
  { name: "Eyebrow oil", image: "/images/IMG_1221.JPEG", alt: "Nourishing eyebrow oil", className: "category-card-tall" },
  { name: "Bamboo brush", image: "/images/IMG_9758.JPG", alt: "Bamboo hair brush", className: "category-card-tall" },
];

/** Home page: introduces the brand, categories, and most-loved products. */
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Organic hair oil</p>
          <h1>Care begins<br />at the <em>scalp.</em></h1>
          <p className="hero-text">Our organic hair oil supports scalp health, helps with dry, flaky scalp, and leaves hair soft after one use.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/products">Shop the collection <span>→</span></Link>
            <Link className="text-link" href="/about">Our story <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="sun-disc" />
          <div className="hero-arch">
            <Image fill priority sizes="(max-width: 700px) 100vw, 50vw" src="/images/IMG_9979.JPG" alt="Organic hair oil" />
          </div>
          <p className="hero-note">Made for your<br />unique scalp</p>
          <div aria-hidden="true" className="leaf-sprig">❧</div>
        </div>
      </section>

      <section className="value-strip" aria-label="GK Organic values">
          <p>Scalp-focused care</p><span>✦</span><p>Customizable oil</p><span>✦</span><p>Soft hair after one use</p>
      </section>

      <section className="section collection-intro">
        <SectionHeading eyebrow="The collection" title={<>Nourishment for every <em>root.</em></>} body="Organic oils for your scalp, hair, lashes, and brows, plus a bamboo brush for your hair-care routine." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem', marginRight: 0, marginBottom: 0, marginLeft: 0 }}>
          <div style={{ position: 'relative', aspectRatio: '1/2', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#b6926f' }}>
            <Image fill sizes="(max-width: 700px) 100vw, 25vw" src="/images/B1BA4CA7-E214-41CE-8B8F-A722BFEABE53.JPEG" alt="Scalp-focused care oil" style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'relative', aspectRatio: '1/2', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#b6926f' }}>
            <Image fill sizes="(max-width: 700px) 100vw, 25vw" src="/images/IMG_1215.JPG" alt="Organic hair oil" style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'relative', aspectRatio: '1/2', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#b6926f' }}>
            <Image fill sizes="(max-width: 700px) 100vw, 25vw" src="/images/IMG_1216.JPG" alt="Nourishing lash oil" style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'relative', aspectRatio: '1/2', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#b6926f' }}>
            <Image fill sizes="(max-width: 700px) 100vw, 25vw" src="/images/IMG_1221.JPEG" alt="Nourishing eyebrow oil" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="section ritual-section">
        <div className="ritual-image"><Image fill sizes="(max-width: 700px) 100vw, 50vw" src="/images/3470FF19-8476-4DDE-9497-187AA437B6C2.JPG" alt="Organic hair oil" /></div>
        <div className="ritual-copy">
          <p className="eyebrow">Scalp-first care</p>
          <h2>Healthy hair starts<br />at the <em>scalp.</em></h2>
          <p>Our oil promotes healthy hair growth, helps with dry and flaky scalp, and rejuvenates hair to reduce split ends over time.</p>
          <Link className="button button-outline" href="/about">Learn about our oils <span>→</span></Link>
        </div>
      </section>

      <section className="section featured-section">
        <SectionHeading eyebrow="Our oils" title={<>Care made for <em>you.</em></>} />
        <FeaturedProducts />
        <div className="center"><Link className="text-link" href="/products">See all products <span>→</span></Link></div>
      </section>
      <Newsletter />
    </>
  );
}
