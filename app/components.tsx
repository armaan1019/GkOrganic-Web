import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/** Product data is kept in one place so product cards stay consistent across pages. */
export const products = [
  { name: "Wild Olive Body Oil", type: "Nourishing body oil", price: "$32", color: "olive", image: "/images/oil.svg" },
  { name: "Oat & Honey Soap", type: "Gentle cleansing bar", price: "$14", color: "honey", image: "/images/soap.svg" },
  { name: "Cedar + Clay Soap", type: "Earthy cleansing bar", price: "$14", color: "clay", image: "/images/bath.svg" },
];

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

/** Displays the small, reusable product collection used on the home and shop pages. */
export function FeaturedProducts() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <Link className={`product-image ${product.color}`} href="/products">
            <Image fill sizes="(max-width: 700px) 100vw, 33vw" src={product.image} alt={product.name} />
            <span aria-hidden="true" className="bag">+</span>
          </Link>
          <div className="product-meta">
            <div>
              <h3>{product.name}</h3>
              <p>{product.type}</p>
            </div>
            <strong>{product.price}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Email capture block. Form submission is intentionally a visual placeholder for now. */
export function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <p className="eyebrow">A note from the grove</p>
        <h2>Good things, <em>growing.</em></h2>
      </div>
      <form>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Your email address" />
        <button aria-label="Subscribe" type="submit">→</button>
      </form>
      <p>Seasonal rituals, garden notes, and 10% off your first order.</p>
    </section>
  );
}
