import Image from "next/image";
import Link from "next/link";
import { FeaturedProducts, Newsletter, SectionHeading } from "./components";
import { getProducts } from "@/lib/products";

const collectionImages = [
  {
    image: "/images/B1BA4CA7-E214-41CE-8B8F-A722BFEABE53.JPEG",
    alt: "Scalp-focused care oil",
  },
  {
    image: "/images/IMG_1216.JPG",
    alt: "Nourishing lash oil",
  },
];

/** Home page: introduces the brand, collection, care philosophy, and featured products. */
export async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Scalp-first care</p>

          <h1>
            Care begins
            <br />
            at the <em>scalp.</em>
          </h1>

          <p className="hero-text">
            Thoughtfully made hair care designed to nourish your scalp and
            become part of a simple, intentional routine.
          </p>

          <div className="hero-actions">
            <Link className="button button-dark" href="/products">
              Shop the collection <span>→</span>
            </Link>

            <Link className="text-link" href="/about">
              Our story <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="sun-disc" />

          <div className="hero-arch">
            <Image
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
              src="/images/IMG_9979.JPG"
              alt="GK Organic hair oil"
            />
          </div>

          <p className="hero-note">
            Made for your
            <br />
            unique routine
          </p>

          <div aria-hidden="true" className="leaf-sprig">
            ❧
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="GK Organic values">
        <p>Scalp-focused care</p>
        <span>✦</span>
        <p>Thoughtfully made</p>
        <span>✦</span>
        <p>Made for your routine</p>
      </section>

      <section className="section collection-intro">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Nourishment for every <em>root.</em>
            </>
          }
          body="Explore hair, lash, and eyebrow oils alongside a bamboo brush designed to complement your everyday routine."
        />

        <div className="collection-grid">
          {collectionImages.map((item, index) => (
            <div className="collection-tile" key={item.image}>
              <Image
                fill
                sizes="(max-width: 700px) 50vw, 45vw"
                src={item.image}
                alt={item.alt}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section ritual-section">
        <div className="ritual-image">
          <Image
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            src="/images/3470FF19-8476-4DDE-9497-187AA437B6C2.JPG"
            alt="GK Organic hair care"
          />
        </div>

        <div className="ritual-copy">
          <p className="eyebrow">The ritual</p>

          <h2>
            Start with the
            <br />
            <em>scalp.</em>
          </h2>

          <p>
            A good hair-care routine begins with caring for the foundation.
            Keep your ritual simple, intentional, and suited to your own
            needs.
          </p>

          <Link className="button button-outline" href="/about">
            Learn about our oils <span>→</span>
          </Link>
        </div>
      </section>

      <section className="section featured-section">
        <SectionHeading
          eyebrow="Our collection"
          title={
            <>
              Care made for <em>you.</em>
            </>
          }
        />

        <FeaturedProducts items={products} />

        <div className="center">
          <Link className="text-link" href="/products">
            See all products <span>→</span>
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default HomePage;