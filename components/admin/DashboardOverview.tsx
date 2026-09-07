
import { StatCard } from "@/components/admin/StatCard";
import { ProductTable } from "@/components/admin/ProductTable";

export function DashboardOverview() {
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
        <StatCard label="Total Products" value="0" />
        <StatCard label="Active Products" value="0" />
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