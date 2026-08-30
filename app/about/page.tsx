import Image from "next/image";
import Link from "next/link";

const principles = [
  { number: "01", title: "Rooted in plants", description: "We choose ingredients that are gentle on skin and kind to the land." },
  { number: "02", title: "Made slowly", description: "Small batches let us give every formula the care it deserves." },
  { number: "03", title: "Less, but better", description: "Thoughtful essentials, designed to be used to the very last drop." },
];

/** About page: shares GK_Organic's origin story and guiding principles. */
export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <p className="eyebrow">Our roots</p>
          <h1>Care grows<br />from <em>curiosity.</em></h1>
        </div>
        <div className="about-image">
          <Image fill sizes="(max-width: 700px) 100vw, 50vw" src="/images/botanical-hero.svg" alt="Illustration of botanical ingredients" />
        </div>
      </section>

      <section className="section story">
        <p className="eyebrow">Our story</p>
        <div>
          <h2>Made for the moments<br />that bring you <em>back to yourself.</em></h2>
          <p>GK_Organic began at a kitchen table in coastal California, with a few jars of golden oil and a desire to make everyday care feel more considered. Today, every bar and bottle is still made in small batches, with plant-rich ingredients and a whole lot of intention.</p>
          <Link className="button button-dark" href="/products">Discover our goods <span>→</span></Link>
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
