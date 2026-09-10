import { Products } from "../components";
import { getProducts } from "@/lib/products";

/** Shop page: presents category links and the current product collection. */
export async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <section className="page-hero products-hero">
        <p className="eyebrow">The shop</p>
        <h1>Care that starts<br />at the <em>scalp.</em></h1>
        <p>Explore organic hair, lash, and eyebrow oils made to nourish and support healthy growth, plus a bamboo brush for your routine.</p>
      </section>
      <section className="section products-page">
        {/* Product filters are static until product filtering is connected. */}
        <nav aria-label="Product categories" className="product-filter">
          <span>All products</span><span>Hair oil</span><span>Lash oil</span><span>Eyebrow oil</span><span>Bamboo brush</span>
        </nav>
        <Products items={products} />
      </section>
    </>
  );
}

export default ProductsPage;
