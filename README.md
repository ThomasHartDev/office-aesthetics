# Office Aestheticas

An ecommerce store for home office furniture and gear. Product pages with variants and filtering, a cart and checkout, multiple payment methods, user accounts, marketing integrations, and a full admin console.

**Live site:** https://aestheticas.com

## Overview

Office Aestheticas is a Nuxt 3 storefront with server-side rendering. Shoppers browse products with variant selection and filtering, read and leave reviews, and check out with PayPal, Square, or Amazon Pay. Accounts carry order history, wishlists, recently viewed items, and support tickets. Marketing runs through Klaviyo email flows and Meta Pixel plus the Conversions API. An admin console manages products, orders, blogs, reviews, bundles, affiliates, and users.

## Features

- Product pages with variant handling and filtering
- Reviews and ratings, charted with Chart.js
- Cart and checkout with PayPal, Square, and Amazon Pay
- Email/password and Google sign-in
- Accounts: orders, wishlists, recently viewed, support tickets
- Klaviyo email flows and waitlist, Meta Pixel and Conversions API tracking
- AWS S3 for assets, AWS SES and Nodemailer/MJML for transactional email
- Admin console for products, orders, blogs, reviews, bundles, affiliates, and users
- SSR for fast first paint and search indexing
- Auto-deploy on push to `main`

## Stack

- Nuxt 3 (Vue 3, SSR), Pinia for state
- Nuxt server routes for the API
- MongoDB Atlas via Mongoose, plus `pg`
- AWS S3 and SES (`@aws-sdk/client-s3`, `@aws-sdk/client-ses`)
- Payments: PayPal JS SDK, Square SDK, Amazon Pay API SDK
- Marketing: Klaviyo API, Meta Pixel and Conversions API
- Auth: Google OAuth, `jsonwebtoken`, `bcrypt`, reCAPTCHA v3
- Email templating with MJML and Nodemailer
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Set the environment variables (MongoDB, AWS, payment providers, Google OAuth, Klaviyo, Meta). The core set:

```
DB_URI=your_mongodb_connection_string
S3_BUCKET=your_s3_bucket_name
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
SQUARE_APP_ID=your_square_application_id
SQUARE_ACCESS_TOKEN=your_square_access_token
SQUARE_LOCATION_ID=your_square_location_id
KLAVIYO_PUBLIC_KEY=your_klaviyo_public_key
KLAVIYO_PRIVATE_KEY=your_klaviyo_private_key
META_PIXEL_ID=your_meta_pixel_id
META_ACCESS_TOKEN=your_meta_conversions_api_access_token
```

Run tests and build:

```bash
npm run test:unit
npm run build
npm run start
```

Built by HARTECHO.
