const sequelize = require("../../src/db/models/index").sequelize;
const Item = require("../../src/db/models").Item;

describe("Item", () => {
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
    it("should create a Item object with a valid name, category, and price", (done) =>  {
      Item.create({
        name: "pansy",
        category: "Flower",
        price: 3.00,
      })
      .then((item) => {
        expect(item.name).toBe("pansy");
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
