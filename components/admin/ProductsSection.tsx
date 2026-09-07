import { useState } from "react";
import {ProductTable} from "@/components/admin/ProductTable";
import type { Product } from "@/lib/types";

const products: Product[] = [

]

export function ProductsSection() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-products">
      <div className="admin-section-heading">
        <div>
          <p className="admin-eyebrow">Store management</p>
          <h2>Your products</h2>
          <p>Manage the products displayed in the GK Organic shop.</p>
        </div>

        <button type="button" className="admin-primary-button">
          + Add Product
        </button>
      </div>

      <div className="admin-toolbar">
        <div className="admin-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button type="button" className="admin-filter-button">
          All products
          <span>⌄</span>
        </button>
      </div>

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <span className="admin-product-count">
              {filteredProducts.length} products
            </span>
          </div>
        </div>

        <ProductTable products={filteredProducts} />
      </section>
    </div>
  );
}