"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

/** Sign-in entry point. Connect these controls to an auth provider when one is selected. */
export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn: React.ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    router.push("/");
  };

  return (
    <section className="account-page">
      <div className="account-background">
        <Image
          fill
          sizes="100vw"
          src="/images/IMG_9914.JPEG"
          alt=""
        />
      </div>

      <div className="account-card">
        <p className="eyebrow">Your GK Organic account</p>
        <h1>Welcome back</h1>
        <p className="account-subtitle">
          Sign in to pick up where you left off.
        </p>

        {/* Google OAuth can be connected here once a provider and callback URL are configured. */}
        <button className="google-button" type="button">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3Z"
            />
            <path
              fill="#34A853"
              d="M12 22c2.7 0 5-.9 6.7-2.5l-3.2-2.5c-.9.6-2 .9-3.5.9-2.7 0-5-1.8-5.8-4.3H2.9v2.6A10 10 0 0 0 12 22Z"
            />
            <path
              fill="#FBBC05"
              d="M6.2 13.6a6 6 0 0 1 0-3.7V7.3H2.9a10 10 0 0 0 0 9l3.3-2.7Z"
            />
            <path
              fill="#EA4335"
              d="M12 6.1c1.6 0 3 .6 4.1 1.6l3.1-3A10 10 0 0 0 2.9 7.3l3.3 2.6C7 7.6 9.3 6.1 12 6.1Z"
            />
          </svg>
          Continue with Google
        </button>

        <div className="account-divider">
          <span>or use your email</span>
        </div>

        <form className="account-form" onSubmit={handleSignIn}>
          <label htmlFor="login-email">
            Email address
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="login-password">
            Password
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && (
            <p role="alert" className="account-error">
              {error}
            </p>
          )}

          <button
            className="button button-dark"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
            {!isLoading && <span>→</span>}
          </button>
        </form>

        <p className="account-note">
          New to GK Organic? <Link href="/account">Create an account</Link>
        </p>
      </div>
    </section>
  );
}