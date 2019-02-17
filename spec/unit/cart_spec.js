const sequelize = require("../../src/db/models/index").sequelize;
const Cart = require("../../src/db/models").Cart;

describe("Cart", () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe("#create", () => {
    it("should create a Cart object with a valid name, category, price, and quantity", (done) =>  {
      Cart.create({
        name: "now and later",
        category: "Candy",
        price: .75,
        quantity: 1
      })
      .then((item) => {
        expect(item.name).toBe("now and later");
        expect(item.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });
})
