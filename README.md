# Product-SaveForLater

## Objective
The objective of this assessment is to work with REST APIs, understand asynchronous programming, and build interactive web pages using JavaScript.

## Prerequisites
1. Fork this boilerplate repository.
2. Clone the boilerplate repository and navigate into it.
3. Install dependencies. The idea here is to use json-server to serve static pages and data for movies.


## Coding Guidelines
- All your HTML code should reside in `public/index.html`.
- All your JavaScript code should reside in the `public/js` folder.
- All your CSS code should reside in the `public/css` folder.
- All your images should reside in the `public/images` folder.
- HTML, JavaScript, and CSS code should be well-indented and commented.
- Use Bootstrap to style your pages and elements.

## Requirements
1. Populate data for the Products collection in `db.json` while another `saveforlater` collection could be left empty initially.
2. Create two sections/lists: Products and Save For Later in your HTML page.
3. Products and the Save For Later section of the page should populate all the movies and favorites from `db.json` using AJAX calls.
4. Every product item should have an "Add to Save For Later" button.
5. On clicking the "Add to Save For Later" button, a copy of the movie item should be moved to the Save For Later list/section. The movie added to the Save For Later section should also be added to the `saveforlater` collection of `db.json` using AJAX calls.

## Instructions
- Each product item in `db.json` should have at least the following fields: `id`, `title`, `description`, `price`, `rating`, `stock`, `category`, and `thumbnail`.
- It is mandatory to use the Fetch API and Promises for all the HTTP calls.

### JavaScript Functions
The `public/js/script.js` file is expected to have three functions:
1. `getProducts()` - Fetches products from `http://localhost:3000/products`, populates them in the DOM under `<ul id="products">`, and returns a promise with the JSON response from the API.
2. `getSaveForLater()` - Fetches Save For Later items from `http://localhost:3000/saveforlater`, populates them in the DOM under `<ul id="saveforlaterList">`, and returns a promise with the JSON response from the API.
3. `addSaveForLater(id)` - Acts as the click event handler for the "Add to Save For Later" button corresponding to each product listed under Products on the page. This function takes the `id` of a product as input, copies the respective product to the Save For Later section, posts the product to `db.json` via `http://localhost:3000/saveforlater`, and returns a promise with the complete list of Save For Later items loaded on the page.

### HTML Structure
The `public/index.html` file should populate:
- Products list under `<ul id="products">`
- Favorites list under `<ul id="saveforlaterList">`

The `getProducts()` and `getSaveForLater()` functions should be invoked as shown in the file. You can delete products from the Save For Later list by passing the `id` through the function `deleteSaveForLater(id)`.


