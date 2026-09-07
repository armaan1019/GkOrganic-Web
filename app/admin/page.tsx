"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/auth";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  imageCount: number;
  isActive: boolean;
};

const products: Product[] = [
  {
    id: "1",
    name: "Scalp Growth Oil",
    category: "Hair Oil",
    price: 24,
    quantity: 12,
    image: "/images/scalp-oil.jpg",
    imageCount: 3,
    isActive: true,
  },
  {
    id: "2",
    name: "Lash Growth Oil",
    category: "Lash Oil",
    price: 18,
    quantity: 8,
    image: "/images/lash-oil.jpg",
    imageCount: 4,
    isActive: true,
  },
  {
    id: "3",
    name: "Eyebrow Growth Oil",
    category: "Eyebrow Oil",
    price: 18,
    quantity: 6,
    image: "/images/eyebrow-oil.jpg",
    imageCount: 3,
    isActive: true,
  },
  {
    id: "4",
    name: "Bamboo Brush",
    category: "Bamboo Brush",
    price: 12,
    quantity: 20,
    image: "/images/bamboo-brush.jpg",
    imageCount: 2,
    isActive: false,
  },
];

export default function AdminPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"products" | "dashboard">(
    "products"
  );

  const [checkingAccess, setCheckingAccess] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function checkAdminAccess() {
      const admin = await isAdmin();

      console.log("is Admin: ", admin);

      if(!admin) {
          setCheckingAccess(false);
          return;
      }

      setAuthorized(true);
      setCheckingAccess(false);
    }

    checkAdminAccess();
  }, [router]);

  if(checkingAccess) {
    return (
      <main className="admin-page">
        <div className="admin-loading">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if(!authorized) {
    return null;
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="admin-brand-name">GK ORGANIC</span>
          <span className="admin-brand-label">Admin</span>
        </div>

        <nav className="admin-nav" aria-label="Admin navigation">
          <button
            type="button"
            className={`admin-nav-item ${
              activeTab === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <span className="admin-nav-icon">⌂</span>
            Dashboard
          </button>

          <button
            type="button"
            className={`admin-nav-item ${
              activeTab === "products" ? "active" : ""
            }`}
            onClick={() => setActiveTab("products")}
          >
            <span className="admin-nav-icon">□</span>
            Products
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <button type="button" className="admin-sidebar-link">
            View Store
          </button>
          <button type="button" className="admin-sidebar-link">
            Sign Out
          </button>
        </div>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">GK Organic</p>
            <h1>
              {activeTab === "products" ? "Products" : "Dashboard"}
            </h1>
          </div>

          <div className="admin-header-actions">
            <div className="admin-user">
              <div className="admin-user-avatar">A</div>
              <div>
                <span className="admin-user-name">Admin</span>
                <span className="admin-user-role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {activeTab === "dashboard" ? (
          <DashboardOverview />
        ) : (
          <ProductsSection />
        )}
      </section>
    </main>
  );
}

function DashboardOverview() {
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
        <StatCard label="Total Products" value="4" />
        <StatCard label="Active Products" value="3" />
        <StatCard label="Low Stock" value="0" />
        <StatCard label="Out of Stock" value="0" />
      </div>

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-eyebrow">Store</p>
            <h3>Recent Products</h3>
          </div>
        </div>

        <ProductTable />
      </section>
    </div>
  );
}

function ProductsSection() {
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

function ProductTable({
  products: tableProducts = products,
}: {
  products?: Product[];
}) {
  return (
    <>
      <div className="admin-product-table">
        <div className="admin-table-row admin-table-head">
          <div>Product</div>
          <div>Category</div>
          <div>Inventory</div>
          <div>Price</div>
          <div>Status</div>
          <div />
        </div>

        {tableProducts.map((product) => (
          <div className="admin-table-row" key={product.id}>
            <div className="admin-product-cell">
              <div className="admin-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div>
                <div className="admin-product-name">{product.name}</div>
                <div className="admin-product-images">
                  {product.imageCount} images
                </div>
              </div>
            </div>

            <div className="admin-muted">{product.category}</div>

            <div>
              <span
                className={
                  product.quantity === 0
                    ? "inventory-danger"
                    : product.quantity <= 5
                    ? "inventory-warning"
                    : "admin-muted"
                }
              >
                {product.quantity} in stock
              </span>
            </div>

            <div className="admin-price">
              ${product.price.toFixed(2)}
            </div>

            <div>
              <span
                className={`status-pill ${
                  product.isActive ? "status-active" : "status-hidden"
                }`}
              >
                <span />
                {product.isActive ? "Active" : "Hidden"}
              </span>
            </div>

            <div className="admin-row-actions">
              <button type="button" className="admin-row-button">
                Edit
              </button>
              <button
                type="button"
                className="admin-row-button admin-delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-mobile-products">
        {tableProducts.map((product) => (
          <article className="admin-mobile-card" key={product.id}>
            <div className="admin-mobile-card-top">
              <div className="admin-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="admin-mobile-product-info">
                <div className="admin-product-name">{product.name}</div>
                <div className="admin-muted">{product.category}</div>
                <div className="admin-product-images">
                  {product.imageCount} images
                </div>
              </div>

              <span
                className={`status-pill ${
                  product.isActive ? "status-active" : "status-hidden"
                }`}
              >
                <span />
                {product.isActive ? "Active" : "Hidden"}
              </span>
            </div>

            <div className="admin-mobile-meta">
              <div>
                <span>Price</span>
                <strong>${product.price.toFixed(2)}</strong>
              </div>

              <div>
                <span>Inventory</span>
                <strong>{product.quantity}</strong>
              </div>
            </div>

            <div className="admin-mobile-actions">
              <button type="button" className="admin-row-button">
                Edit
              </button>
              <button
                type="button"
                className="admin-row-button admin-delete-button"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="admin-stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}