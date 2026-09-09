"use client";

import { useState, useEffect } from "react";
import { uploadProductImages, addProduct, getCategories } from "@/lib/products";
import type { Category } from "@/lib/types";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    }

    fetchCategories();
  }, []);

  function handleSetPrimary(index: number) {
    if (index === 0) return;

    setImages((currentImages) => {
      const selectedImage = currentImages[index];

      return [
        selectedImage,
        ...currentImages.slice(0, index),
        ...currentImages.slice(index + 1),
      ]
    })
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setSubmitting(true);
      
      const product = await addProduct({
        name,
        details,
        categoryId,
        price: Number(price),
        quantity: Number(quantity),
        isActive,
      });

      if (images.length > 0) {
        await uploadProductImages(product.id, images);
      }

      console.log("Product added:", product);

      setName("");
      setDetails("");
      setCategoryId("");
      setPrice("");
      setQuantity("");
      setIsActive(true);
      setImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setSubmitting(false);
    }
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
              disabled={loadingCategories}
            >
              <option value="">
                {loadingCategories ? "Loading categories..." : "Select a category"}
              </option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
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
            onChange={(event) => {
              const files = Array.from(event.target.files ?? []);
              setImages(files);
            }}
          />

          {images.length > 0 && (
            <div className="admin-image-preview-grid">
              {images.map((image, index) => (
                <div
                  key={`${image.name}-${index}`}
                  className={`admin-image-preview ${index === 0 ? "admin-image-preview-primary" : ""
                    }`}
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Product image ${index + 1}`}
                  />

                  <div className="admin-image-preview-info">
                    {index === 0 ? (
                      <span className="admin-image-primary-label">
                        Primary Image
                      </span>
                    ) : (
                      <button
                        type="button"
                        className="admin-image-primary-button"
                        onClick={() => handleSetPrimary(index)}
                      >
                        Set as primary
                      </button>
                    )}

                    <span className="admin-image-name">
                      {image.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-primary-button" disabled={submitting}>
          {submitting ? "Adding Product..." : "Add Product"}
        </button>
      </div>
    </form>
  );
}