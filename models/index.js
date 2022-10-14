// bring in all tables
const User = require("./user");
const Product = require("./product");
const Location = require("./location");
const Shelf = require("./shelf");

//adding relations to bring all tables to one

shelf.hasMany(Product, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

shelf.hasMany(Location, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

shelf.hasMany(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = { Shelf, User, Product, Location };
