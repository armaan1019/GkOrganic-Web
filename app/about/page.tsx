import Image from "next/image";
import Link from "next/link";

const principles = [
  { number: "01", title: "Scalp health", description: "Our organic hair oil helps care for dry, flaky scalp." },
  { number: "02", title: "Healthy growth", description: "The oil promotes healthy hair growth and leaves hair soft after one use." },
  { number: "03", title: "Your concerns", description: "Each hair oil can be customized for your hair and scalp concerns." },
];

/** About page: shares GK Organic's origin story and guiding principles. */
export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <p className="eyebrow">About our oils</p>
          <h1>Care that starts<br />at the <em>scalp.</em></h1>
        </div>
        <div className="about-image">
          <Image fill sizes="(max-width: 700px) 100vw, 50vw" src="/images/0E0CF421-DB63-4FB6-BAFA-EE0DD3A56093.JPG" alt="Organic hair oil" />
        </div>
      </section>

      <section className="section story">
        <p className="eyebrow">Scalp-first care</p>
        <div>
          <h2>Healthy hair starts<br />at the <em>scalp.</em></h2>
          <p>Our organic hair oil supports scalp health, helps with dry, flaky scalp, and rejuvenates hair. Over time, it helps reduce split ends. Each oil can be customized for your hair and scalp concerns.</p>
          <Link className="button button-dark" href="/products">Shop our oils <span>→</span></Link>
        </div>
      </section>

      <section className="principles" aria-label="Our principles">
        {principles.map((principle) => (
          <article key={principle.number}>
            <span>{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
