const Color = require("./color.model");
const Size = require("./size.model");
const Category = require("./Category.model");

module.exports = (dbInstance) => {
  return { color: Color(dbInstance), size: Size(dbInstance), category: Category(dbInstance) };
};
