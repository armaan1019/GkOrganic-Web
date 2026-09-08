"use client";

import { useEffect, useState } from "react";
import { ProductTable } from "@/components/admin/ProductTable";
import type { Product } from "@/lib/types";
import { getProducts } from "@/lib/products";
import { AddProductForm } from "@/components/admin/AddProductForm";

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [addingProduct, setAddingProduct] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (addingProduct) {
    return (
      <div className="admin-products">
        <div className="admin-section-heading">
          <div>
            <p className="admin-eyebrow">Store management</p>
            <h2>Add product</h2>
            <p>Create a new product for the GK Organic shop.</p>
          </div>

          <button
            type="button"
            className="admin-secondary-button"
            onClick={() => setAddingProduct(false)}
          >
            Cancel
          </button>
        </div>

        <AddProductForm />
      </div>
    );
  }

  return (
    <div className="admin-products">
      <div className="admin-section-heading">
        <div>
          <p className="admin-eyebrow">Store management</p>
          <h2>Your products</h2>
          <p>Manage the products displayed in the GK Organic shop.</p>
        </div>

        <button type="button" className="admin-primary-button" onClick={() => setAddingProduct(true)}>
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