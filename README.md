# Stripe API Integration Tutorial

## Description of Tutorial and Technology Used

* This Stripe API Tutorial shows developers how to integrate a credit card payment system into applications they are building
* This tutorial uses Node and Express
* The application is deployed to Heroku
* This tutorial utilizes [Stripe Checkout](https://stripe.com/checkout), a simple payment form for Web and Mobile
* This code uses Handlebars, but you could alternatively use React, Vue, or another frontend framework to componentize your application

## Live Site
* Check out the [live site utilizing Stripe's Test Code](https://quiet-coast-55853.herokuapp.com/)
* I made this tutorial for a Mobile App I recently build called [_Can I Eat That?_](https://github.com/BryanLong14/Can-I-Eat-That-Frontend-Capstone-Project)

## Downloading and Running This Code

* Fork & Clone This Repo
* `npm install`
* `cp keys_dev.example.js keys_dev.js`
  * Register on Stripe.com
  * Replace the API keys in keys_dev.js with your Stripe API keys (see explanation below)
* `npm start` or `nodemon`

## Tutorial
### `This Looks great. How the heck do I actually build it?`
### Open a Stripe Account
* Go to [Stripe](https://stripe.com/) and signup for a free account
    * Developers > API Keys
    * These are the keys you will add to your keys_dev.js file 