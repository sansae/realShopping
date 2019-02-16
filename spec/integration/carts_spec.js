const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const Item = require("../../src/db/models").Item;
const Cart = require("../../src/db/models").Cart;

describe("routes : carts", () => {
  beforeEach((done) => {
    this.item;
    this.cart;

    sequelize.sync({force: true})
    .then((res) => {
      Item.create({
        name: "rose",
        category: "Flower",
        price: 3.00,
      })
      .then((item) => {
        this.item = item;

        Cart.create({
          name: this.item.name,
          category: this.item.category,
          price: this.item.price,
          quantity: 1
        })
        .then((cart) => {
          this.cart = cart;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      });
    });
  });// end beforeEach

  describe("POST /items/:itemId/create", () => {
    it("should add new item to the cart", (done) => {
      const options = {
        url: `${base}items/${this.item.id}/create`,
        form: {
          name: 'mamba',
          category: 'Candy',
          price: .75,
        }
      };

      request.post(options, (err, res, body) => {
        Cart.findOne({
          where: { name: "mamba" }
        })
        .then((item) => {
          expect(item).not.toBeNull();
          expect(item.name).toBe("mamba");
          expect(item.id).toBe(2);
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });
});
