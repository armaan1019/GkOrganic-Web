import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ProductWithImages } from "@/lib/products";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  body?: string;
};

/** Reusable title treatment for content sections. */
export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="heading-body">{body}</p>}
    </div>
  );
}

type ProductGridProps = {
  items: ProductWithImages[];
};

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <article className="product-card" key={product.id}>
          <Link
            className="product-image"
            href={`/products/${product.id}`}
          >
            {product.image ? (
              <Image
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                src={product.image}
                alt={product.name}
              />
            ) : (
              <div className="product-image-placeholder">
                No image
              </div>
            )}

            <span aria-hidden="true" className="bag">
              +
            </span>
          </Link>

          <div className="product-meta">
            <div>
              <h3>{product.name}</h3>
              <p>{product.details}</p>
            </div>

            <span>${product.price.toFixed(2)}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Displays the small, reusable product collection used on the home and shop pages. */
export function FeaturedProducts({ items }: ProductGridProps) {
  return <ProductGrid items={items.slice(0, 3)} />;
}

export function Products({ items }: ProductGridProps) {
  return <ProductGrid items={items} />;
}

/** Email capture block. Form submission is intentionally a visual placeholder for now. */
export function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <p className="eyebrow">Stay in touch</p>
        <h2>Care for hair,<br /><em>lashes &amp; brows.</em></h2>
      </div>
      <form>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Your email address" />
        <button aria-label="Subscribe" type="submit">→</button>
      </form>
      <p>Subscribe for updates from GK Organic.</p>
    </section>
  );
}
