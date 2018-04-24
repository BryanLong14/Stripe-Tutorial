# Stripe Integration Tutorial

## Live Site

![Live Site Demo Code](https://github.com/BryanLong14/Stripe-Tutorial/blob/master/public/images/Tutorial.gif)

* I made this tutorial for a Mobile App I recently build called _Can I Eat That?_
* Check out the live credt card payment [site utilizing Stripe's Test Mode](https://quiet-coast-55853.herokuapp.com/)

## Description of Tutorial and Technology Used

* This Stripe API Tutorial shows developers how to integrate a credit card payment system into applications they are building
* This tutorial uses Node and Express
* The application is deployed to Heroku
* This tutorial utilizes [Stripe Checkout](https://stripe.com/checkout), a simple payment form for Web and Mobile apps
* Here is a link to the exhaustive [Stripe API Docs](https://stripe.com/docs/api)
* This code uses Handlebars, but you could alternatively use React, Vue, or another frontend framework

## Downloading and Running This Code

* Fork & Clone This Repo
* `npm install`
* `cp config/keys_dev.example.js config/keys_dev.js`
  * Register on Stripe.com
  * Replace the API keys in keys_dev.js with your Stripe API keys (see explanation below)
* `npm start` or `nodemon`

## `This Looks great. How the heck do I actually build it?`

## Tutorial

### Open a Stripe Account and get your API Keys

* Go to [Stripe](https://stripe.com/) and signup for a free account. Then go to:
  * Developers > API Keys
  * These are the keys you will add to your keys_dev.js file

### Key Code Components

#### Client-Side Code With HTML Form

* Using [Stripe Checkout](https://stripe.com/checkout), below is the code I used to create the `form`. See the index.handlebars file for the full page's code.
* Notice that inputs don’t have a name attribute because personal credit card info does not hit your server.
* Inputs on form have a “data" attributes, which Stipe.js sends to its server, adds a hidden input “Token”, and then posts that Token to your server.
* Stripe stores credit card info on their server so you only receive the Token, which you can use to process payment via the Stripe server. This means you don't have to deal with the security of handling people's credit card info.

```javascript
<form action="/charge" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="{{stripePublishableKey}}"
    data-amount="1000"
    data-name="Can I Eat That Subscription"
    data-description="Access to Can I Eat That App Features"
    data-image="/images/marketplace.png"
    data-locale="auto"
  />
</form>
```

#### Server-Side Code

See the annotated app.js file

#### Heroku

* Push your app to Heroku
* Save your Stripe Keys in Heroku as Config Variables. See Screenshot below to see where you can add your config variables:
  ![Config Variables](/public/images/HerokuConfigVars.jpg)

## Author

[Bryan Long](https://github.com/bryanlong14)

## License

MIT
