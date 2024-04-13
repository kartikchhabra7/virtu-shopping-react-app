# **Virtu Shopping App**

Virtu Shop is an e-commerce shopping application. created with ReactJS and Redux.

## **Deployment**

The live production version of My Virtu Shopping App is hosted at **[Explore Shopping App](https://virtu-shopping.netlify.app/)**

## **Features**

### Product Search

With Virtu Shopping's product search feature, finding products has never been easier. Here's how it works:

- **Search by Product Name:** Use the search bar at the top of the page to enter keywords related to the product you're looking for. As you type, our intelligent search system will instantly display relevant results, making it effortless to discover the items you desire.

### Product Sorting

With Virtu Shopping's product sorting feature, you have the power to organize and filter products based on your preferences. Here's how it works:

- **Sort by Price:** Easily sort products by their price, helping you find the best deals or stay within your budget. Click on the "Sort by Price" option to arrange items in ascending or descending order.

- **Sort by Name:** Looking for specific brands or product names? Click on the "Sort by Name" option to alphabetically arrange products by their names.

- **Sort by Category:** Utilise the category buttons for viewing items within particular categories. Our products are arranged into several categories, and you may filter things by selecting the appropriate category button. You may easily use this option to focus your search and find goods that fall under a particular category.

### Pagination for Easy Browsing

Virtu Shopping understands that sometimes you want to explore a wide range of products without feeling overwhelmed.

- **Load More:** Instead of endlessly scrolling through pages of products, we've simplified the process. Just click on the "Load More" button at the bottom of the product list, and we'll display the next set of products right before your eyes.

### Coupon Code

Enjoy exclusive discounts with Virtu Shopping's coupon code feature! By entering a valid coupon code during checkout, you can unlock fantastic savings on your purchases. Here's how it works:

- **10% Discount:** Enter an existing coupon code at the designated field during checkout, and instantly receive a 10% discount on eligible items in your cart. It's a great way to save while enjoying a seamless shopping experience.

- **Limited-Time Offers:** Keep an eye out for special promotions and limited-time coupon code offers. We regularly update our discounts, so you can always find exciting deals on a wide range of products.

- **Enhanced Shopping Experience:** Our coupon code feature adds an extra layer of value to your shopping journey. Experience the joy of saving while discovering quality products tailored to your preferences.

***Note :  This is just a practice Virtu Shopping App, and the coupon code benefits mentioned here are for demonstration purposes only. They may not represent actual promotions or offers.***

### Google reCAPTCHA Integration (for Demonstration Purposes)

Enhance the security, even in our dummy app! We've integrated Google reCAPTCHA just to show you how easy it is. While this is a dummy app and not handling real-world threats, you can still experience the added layer of security that reCAPTCHA provides.

### Authentication Requirement

Certain features in Virtu Shopping App, such as accessing the Cart and Payment pages, require user authentication. This ensures a secure and personalized shopping experience.

- **Cart Page:** User authentication is required to add, view, and manage items in your shopping cart.

- **Payment Page:** Authentication is mandatory for the final step of making payments, ensuring the security of your transactions.

To enjoy the full benefits of Virtu Shopping App, please [sign up](#) or [log in](#) if you already have an account.

## **Technical Stack**

- **Front-end:** ReactJS, JavaScript, HTML, CSS & CSS-BOOTSTRAP
- **State Management:** Redux Toolkit
- **Authentication:** Auth0

## **Installation and Usage**

```bash
- Clone the repository.
- npm install.
- npm start.
- Access the application on your local server at http:// localhost:3000.
```

## **API Reference**

| Parameter              | Type     | Description                                                                                 |
| :--------------------- | :------- | :------------------------------------------------------------------------------------------ |
| `REACT_APP_SITE_KEY`   | `string` | Required. API key from **[GoogleCaptcha](https://www.google.com/recaptcha/admin/create)**   |
| `REACT_APP_DOMAIN_KEY` | `string` | Required. API key from **[Auth0](https://auth0.com/docs/quickstart/spa/react/interactive)** |
| `REACT_APP_CLIENT_KEY` | `string` | Required. API key from **[Auth0](https://auth0.com/docs/quickstart/spa/react/interactive)** |
