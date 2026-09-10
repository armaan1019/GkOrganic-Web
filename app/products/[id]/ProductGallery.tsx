"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="product-detail-image product-detail-placeholder">
        No image
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="product-gallery">
      <div className="product-detail-image">
        <Image
          fill
          priority
          sizes="(max-width: 900px) 100vw, 60vw"
          src={images[currentIndex]}
          alt={`${productName} image ${currentIndex + 1}`}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous product image"
            >
              ←
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={goToNext}
              aria-label="Next product image"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === currentIndex
                  ? "gallery-dot active"
                  : "gallery-dot"
              }
              onClick={() => setCurrentIndex(index)}
              aria-label={`View product image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}