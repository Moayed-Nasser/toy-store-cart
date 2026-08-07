# Toy Store - Cart & Checkout Microfrontend

## Overview

This project is the Cart & Checkout microfrontend for the Toy Store application.

It was developed as an independent frontend component using React and Material UI.

## My Responsibility

My responsibility in the Toy Store project is the Cart & Checkout flow.

The microfrontend includes:

- Product display
- Add to Cart
- Shopping Cart
- Product quantity management
- Total price calculation
- Shipping information
- Mock payment
- Order confirmation

## Pages

### Shopping Cart
Users can view products, add products to the cart, and see the total price.

### Shipping
Users enter their shipping information including:

- Full Name
- Phone Number
- Address
- City

### Payment
A mock payment page that collects:

- Card Holder
- Card Number
- Expiry Date
- CVV

No real payment transaction is performed.

### Order Confirmation
After completing the payment step, the user is redirected to an order confirmation page.

## Technologies Used

- React
- Vite
- Material UI (MUI)
- React Router
- JavaScript
- HTML
- CSS

## Routes

| Route | Description |
|---|---|
| `/` | Products and Shopping Cart |
| `/shipping` | Shipping Information |
| `/payment` | Mock Payment |
| `/confirmation` | Order Confirmation |

## Installation

Clone the repository:

git clone https://github.com/Moayed-Nasser/toy-store-cart.git

Move into the project directory:

cd toy-store-cart

Install dependencies:

npm install

Run the development server:

npm run dev

## Live Demo

Vercel Deployment:

PASTE_YOUR_VERCEL_LINK_HERE

## Repository

GitHub:

https://github.com/Moayed-Nasser/toy-store-cart

## Project Architecture

This microfrontend is independently developed and deployed as part of the Toy Store Microfrontends project.

The Cart & Checkout microfrontend is responsible for the checkout flow:

Products → Cart → Shipping → Payment → Order Confirmation

## Author

Moayed Nasser

Cart & Checkout Microfrontend