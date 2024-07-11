# Next.js E-commerce Website

This repository contains the frontend of an e-commerce website built using Next.js. It complements the admin panel and provides complete functionality for users to browse, purchase, and manage products.

## Features

- **Product Listing**: Fetch and display all products.
- **Product Details**: View detailed information for each product.
- **Shopping Cart**: Add products to the cart, adjust quantities, and remove items.
- **Delivery Information**: Input delivery details such as name, email, pin code, city, country, and street address.
- **Checkout**: Secure checkout process using Stripe.
- **Responsive Design**: Fully functional and user-friendly interface.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Styled-components
- **API Integration**: Axios
- **Payment Gateway**: Stripe

## Prerequisites

To run this project on your local system, ensure you have the following environment variables set up in a `.env` file:

```env
STRIPE_PK=your-stripe-publishable-key
STRIPE_SK=your-stripe-secret-key
MONGODB_URI=your-api-base-url
PUBLIC_URL=your-public-url
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/KirtiYadav1681/nextjs-ecommerce-frontend.git
cd nextjs-ecommerce-frontend
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Environment Variables

- `STRIPE_PK`: Publishable key for Stripe.
- `STRIPE_SK`: Secret key for Stripe.
- `PUBLIC_URL`: Public URL for stripe checkout management
- `MONGODB_URI`:Base URL for the API.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.