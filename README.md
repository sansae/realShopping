# RealShopping

RealShopping is a grocery list full-stack web application that can be shared in real-time by multiple people. Users can perform basic CRUD operations for adding, updating, and deleting items from the shopping cart. Authentication also allows users to be signed in to the app from multiple devices.

## Getting Started

If you would like to get this app up and running on your local machine for development and testing purposes, run the following:

```
$ git clone https://github.com/sansae/realShopping.git
$ cd real-shopping
$ npm install
$ npm start
```

### Prerequisites

Make sure you have node and npm installed in your system. For instructions on how, visit [nodejs docs](https://nodejs.org/en/download/package-manager/).

Finally, navigate to localhost:3000 in your browser.

If you prefer to just see and test the app live without installing anything, click  [here](http://realshopping.herokuapp.com/).

## Running Tests

To run both integration and unit tests:

```
$ npm test
```

To run integration or unit tests individually:

```
$ npm test spec/integration/<name-of-spec-test>
```

```
$ npm test spec/unit/<name-of-spec-test>
```

## Built With

* HTML, CSS, and [Bootstrap](https://getbootstrap.com/) - for the front-end
* [Express.js](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/) and [Sequelize.js](https://www.npmjs.com/package/sequelize) - for the back-end
* [Passport.js](http://www.passportjs.org/) - for login/logout
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - for encrypting user passwords

## Upcoming Features

* Implement chat messenger
* Add react for the front-end

## Authors

* **Kent Saeteurn** - [sansae](https://github.com/sansae)
