const { Sequelize, DataTypes } = require("sequelize");
const constant = require("../utils/constant");
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
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Name")
          },
          min: { args: 3, msg: constant.MSG_LENGTH({ min: 3 }) },
          max: { args: 100, msg: constant.MSG_LENGTH({ max: 10 }) }
        }
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Price")
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
