# GK Organic

A modern e-commerce website for **GK Organic**, built with Next.js and Supabase.

## Overview

GK Organic is an organic beauty and skincare storefront designed to provide customers with a simple shopping experience while giving the business an administrative dashboard for managing products, categories, inventory, and orders.

The application supports both **guest shoppers** and **registered customers**, with role-based access for administrators.

## Tech Stack

* **Next.js** — React framework using the App Router
* **TypeScript** — Type-safe application development
* **Supabase** — Authentication, PostgreSQL database, and storage
* **CSS** — Custom styling and responsive layouts
* **Next/Image** — Optimized image handling

## Features

### Storefront

* Product browsing
* Product categories
* Product details
* Product images
* Responsive design
* Guest shopping

### Authentication

* Email/password registration
* Email verification
* Email/password login
* Sign out
* Supabase Auth session management
* Google authentication planned

### Customer Accounts

* Customer profiles
* Account-specific information
* Customer role management through the database

### Administration

* Admin-only dashboard
* Product management
* Category management
* Product image management
* Inventory management
* Order management planned

## Project Structure

```text
GK-Organic/
├── app/
│   ├── account/
│   ├── login/
│   ├── ...
│   └── page.tsx
├── components/
├── lib/
│   ├── auth.ts
│   └── supabase.ts
├── public/
│   └── images/
├── ...
└── README.md
```

## Supabase

Supabase is used for the application's backend services.

### Authentication

Supabase Auth manages:

* User registration
* Password authentication
* Email verification
* Sessions
* Password recovery

### Database

The primary application tables include:

* `profiles`
* `categories`
* `products`
* `product_images`

The `profiles` table is linked to `auth.users`.

New users are assigned the `customer` role through a database-side trigger. Administrator accounts are promoted separately through trusted database operations.

### Storage

Supabase Storage is used for product images.

Product image references are stored in the `product_images` table.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit `.env.local` or any Supabase secret/service-role keys to the repository.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Development

The application is currently under active development.

Planned work includes:

* Admin dashboard
* Product CRUD functionality
* Category management
* Image uploads
* Shopping cart
* Checkout
* Orders and order history
* Customer account management
* Google OAuth
* Production email/SMTP configuration
* Production deployment

## Security

Row Level Security (RLS) is enabled for Supabase tables.

Customers should only be able to access their own profile information. Administrative permissions are controlled through the user's database role rather than client-side state.

Production email delivery will use a custom SMTP provider rather than Supabase's default development email service.

## Deployment

Production deployment and domain configuration will be completed before launch.

The production environment will require:

* Production Supabase configuration
* Custom SMTP
* Business domain
* Secure environment variables
* Production redirect URLs
* Final RLS/security review

## License

This project is proprietary software developed for GK Organic.