const { Sequelize, DataTypes } = require("sequelize");
const constant = require("../utils/constant")
const Product = async (instance) => {
  const Product = instance.define(
    "product",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
          notNull: {
            msg: constant.MSG_REQUIRE_NAME
          }
        }
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    { freezeTableName: true }
  );

  await Product.sync({ alter: true });
  return Product;
};

module.exports = Product;
