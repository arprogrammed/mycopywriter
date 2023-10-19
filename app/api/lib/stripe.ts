import Stripe from 'stripe';

// import of stripe API for use with the call back that would appear on paywall
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: '2023-08-16', // Replace with your preferred API version
});

export { stripe };