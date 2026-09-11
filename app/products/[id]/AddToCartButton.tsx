"use client";

import { useCart } from "@/lib/cart";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  price: number;
};

export function AddToCartButton({
  productId,
  name,
  price,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      productId,
      name,
      price,
    });
  }

  return (
    <button
      type="button"
      className="button button-dark add-to-cart-button"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
}