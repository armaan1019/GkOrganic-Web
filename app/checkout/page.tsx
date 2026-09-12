"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="section checkout-page">
        <div className="checkout-empty">
          <p className="eyebrow">Checkout</p>
          <h1>Your cart is empty.</h1>

          <p>
            Add some GK Organic products before checking out.
          </p>

          <Link
            href="/products"
            className="button button-dark"
          >
            Shop products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section checkout-page">
      <div className="checkout-header">
        <p className="eyebrow">Checkout</p>
        <h1>Complete your order</h1>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form">
          <div className="checkout-section">
            <p className="eyebrow">Contact</p>
            <h2>Contact information</h2>

            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="checkout-section">
            <p className="eyebrow">Shipping</p>
            <h2>Shipping address</h2>

            <div className="checkout-grid">
              <label>
                First name
                <input
                  type="text"
                  name="firstName"
                  required
                />
              </label>

              <label>
                Last name
                <input
                  type="text"
                  name="lastName"
                  required
                />
              </label>
            </div>

            <label>
              Address
              <input
                type="text"
                name="address"
                required
              />
            </label>

            <div className="checkout-grid">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  required
                />
              </label>

              <label>
                State
                <input
                  type="text"
                  name="state"
                  required
                />
              </label>

              <label>
                ZIP code
                <input
                  type="text"
                  name="zip"
                  required
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="button button-dark checkout-submit"
          >
            Continue to payment
          </button>
        </form>

        <aside className="checkout-summary">
          <p className="eyebrow">Your order</p>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.productId}
            >
              <div>
                <h3>{item.name}</h3>
                <p>
                  Qty {item.quantity}
                </p>
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <div className="checkout-summary-row">
            <span>Subtotal</span>
            <strong>
              ${cartTotal.toFixed(2)}
            </strong>
          </div>

          <div className="checkout-summary-row">
            <span>Shipping</span>
            <strong>$0.00</strong>
          </div>

          <div className="checkout-summary-total">
            <span>Total</span>
            <strong>
              ${cartTotal.toFixed(2)}
            </strong>
          </div>
        </aside>
      </div>
    </section>
  );
}