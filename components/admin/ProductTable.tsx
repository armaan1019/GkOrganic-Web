import type { ProductWithImages } from "@/lib/products";

export function ProductTable({
  products: tableProducts,
}: {
  products: ProductWithImages[];
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
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="admin-product-image-placeholder">
                    No image
                  </div>
                )}
              </div>

              <div>
                <div className="admin-product-name">{product.name}</div>
                <div className="admin-product-images">
                  {product.imageCount} images
                </div>
              </div>
            </div>

            <div className="admin-muted">{product.categoryName}</div>

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
                className={`status-pill ${product.isActive ? "status-active" : "status-hidden"
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
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="admin-product-image-placeholder">
                    No image
                  </div>
                )}
              </div>

              <div className="admin-mobile-product-info">
                <div className="admin-product-name">{product.name}</div>
                <div className="admin-muted">{product.categoryName}</div>
                <div className="admin-product-images">
                  {product.imageCount} images
                </div>
              </div>

              <span
                className={`status-pill ${product.isActive ? "status-active" : "status-hidden"
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