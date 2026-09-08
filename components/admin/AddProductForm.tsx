"use client";

import { useState } from "react";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isActive, setIsActive] = useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      details,
      categoryId,
      price: Number(price),
      quantity: Number(quantity),
      isActive,
    });
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-eyebrow">Product</p>
            <h3>Product Information</h3>
          </div>
        </div>

        <div className="admin-form-grid">
          <div className="admin-form-field">
            <label htmlFor="product-name">Product Name</label>
            <input
              id="product-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="admin-form-field">
            <label htmlFor="product-category">Category</label>
            <select
              id="product-category"
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
              required
            >
              <option value="">Select a category</option>
            </select>
          </div>

          <div className="admin-form-field admin-form-field-full">
            <label htmlFor="product-details">Details</label>
            <textarea
              id="product-details"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Describe the product..."
              rows={5}
            />
          </div>

          <div className="admin-form-field">
            <label htmlFor="product-price">Price</label>
            <input
              id="product-price"
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="0.00"
              required
            />
          </div>

          <div className="admin-form-field">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              id="product-quantity"
              type="number"
              min="0"
              step="1"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              placeholder="0"
              required
            />
          </div>
        </div>

        <div className="admin-form-toggle">
          <div>
            <label htmlFor="product-active">Active Product</label>
            <p>Active products are visible and available in the store.</p>
          </div>

          <input
            id="product-active"
            type="checkbox"
            checked={isActive}
            onChange={(event) => setIsActive(event.target.checked)}
          />
        </div>
      </div>

      <div className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-eyebrow">Media</p>
            <h3>Product Images</h3>
            <p>Select multiple images for this product.</p>
          </div>
        </div>

        <div className="admin-image-upload">
          <input
            id="product-images"
            type="file"
            accept="image/*"
            multiple
          />
        </div>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-primary-button">
          Add Product
        </button>
      </div>
    </form>
  );
}