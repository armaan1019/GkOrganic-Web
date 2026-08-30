import { FeaturedProducts } from "../components";

/** Shop page: presents category links and the current product collection. */
export default function ProductsPage() {
  return (
    <>
      <section className="page-hero products-hero">
        <p className="eyebrow">The shop</p>
        <h1>Nature, bottled<br /><em>beautifully.</em></h1>
        <p>Every ingredient earns its place. Explore simple, sensory care for skin and home.</p>
      </section>
      <section className="section products-page">
        {/* Product filters are static until product filtering is connected. */}
        <nav aria-label="Product categories" className="product-filter">
          <span>All goods</span><span>Oils</span><span>Soaps</span><span>Sets</span>
        </nav>
        <FeaturedProducts />
        <FeaturedProducts />
      </section>
    </>
  );
}
