# Food E-Commerce Website

A simple e-commerce website for food products built with Next.js App Router and Tailwind CSS.

## Features

- **Product Listing**: Grid view of food products with images, names, prices, and "Add to Cart" buttons
- **Shopping Cart**: View added items, update quantities, and remove items
- **Checkout**: Form to collect customer information (name, address, mobile, email)
- **Email Notification**: Sends order details to the specified email address

## Tech Stack

- **Frontend**: Next.js App Router with TypeScript and Tailwind CSS
- **State Management**: React Context API for cart functionality
- **Email Service**: Nodemailer for sending order emails

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd rajubhairajwadi-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```
   Note: If using Gmail, you'll need to use an "App Password" instead of your regular password.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Deploy

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

- `/src/app`: Main Next.js App Router structure
- `/src/app/components`: Reusable React components
- `/src/app/context`: React context for state management
- `/src/app/data`: Static data (products.json)
- `/src/app/types`: TypeScript type definitions
- `/src/app/api`: Next.js API routes
- `/public/images`: Product images

## Customization

- Product data can be modified in `/src/app/data/products.json`
- Styles can be customized by editing the Tailwind classes or modifying `/src/app/globals.css`
- Email templates can be modified in `/src/app/api/send-order/route.ts`
# rajubhai_rajwadi_website
# rajubhai_rajwadi_website
