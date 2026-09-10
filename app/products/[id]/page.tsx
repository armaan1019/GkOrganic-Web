import Link from "next/link";
import { getProductById } from "@/lib/products";
import { ProductGallery } from "./ProductGallery";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product || !product.isActive) {
    return (
      <section className="section product-not-found">
        <p className="eyebrow">Product unavailable</p>
        <h1>This product isn't available.</h1>
        <Link className="text-link" href="/products">
          Back to products →
        </Link>
      </section>
    );
  }

  return (
    <section className="section product-detail">
      <div className="product-detail-grid">
        <ProductGallery
          images={product.images}
          productName={product.name}
        />

        <div className="product-detail-copy">
          <p className="eyebrow">{product.categoryName}</p>

          <h1>{product.name}</h1>

          <p className="product-detail-price">
            ${product.price.toFixed(2)}
          </p>

          {product.details && (
            <p className="product-detail-description">
              {product.details}
            </p>
          )}

          <button
            type="button"
            className="button button-dark add-to-cart-button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}