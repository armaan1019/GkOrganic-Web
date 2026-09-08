"use client";

import { StatCard } from "@/components/admin/StatCard";
import { ProductTable } from "@/components/admin/ProductTable";
import { getProducts } from "@/lib/products";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";

export function DashboardOverview() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetchcing products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const totalProducts = products.length;

  const activeProducts = products.filter(
    (product) => product.isActive
  ).length;

  const lowStock = products.filter(
    (product) => product.quantity > 0 && product.quantity <= 5
  ).length;

  const outOfStock = products.filter(
    (product) => product.quantity === 0
  ).length;

  return (
    <div className="admin-dashboard">
      <div className="admin-welcome">
        <div>
          <p className="admin-eyebrow">Overview</p>
          <h2>Welcome back.</h2>
          <p>
            Manage your products, inventory, and store content from here.
          </p>
        </div>

        <button type="button" className="admin-primary-button">
          + Add Product
        </button>
      </div>

      <div className="admin-stat-grid">
        <StatCard label="Total Products" value={loading ? "..." : String(totalProducts)} />
        <StatCard label="Active Products" value={loading ? "..." : String(activeProducts)} />
        <StatCard label="Low Stock" value={loading ? "..." : String(lowStock)} />
        <StatCard label="Out of Stock" value={loading ? "..." : String(outOfStock)} />
      </div>

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-eyebrow">Store</p>
            <h3>Recent Products</h3>
          </div>
        </div>

        <ProductTable products={products.slice(0, 5)} />
      </section>
    </div>
  );
}