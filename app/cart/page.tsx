"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="section cart-page">
        <div className="cart-empty">
          <p className="eyebrow">Your cart</p>

          <h1>Your cart is empty.</h1>

          <p>
            Add some GK Organic products and they’ll appear here.
          </p>

          <Link href="/products" className="button button-dark">
            Shop products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section cart-page">
      <div className="cart-header">
        <p className="eyebrow">Your cart</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.productId}>
              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p>
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="cart-item-controls">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity - 1
                    )
                  }
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity + 1
                    )
                  }
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>

              <p className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                type="button"
                className="cart-remove"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <p className="eyebrow">Order summary</p>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <Link
            href="/checkout"
            className="button button-dark cart-checkout-button"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}