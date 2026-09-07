"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { ProductsSection } from "@/components/admin/ProductsSection";

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