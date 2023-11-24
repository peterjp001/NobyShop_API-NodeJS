const { Sequelize, DataTypes } = require("sequelize");
const constant = require("../utils/constant");

const Category = (instance) => {
  const Category = instance.define(
    "category",
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

  // await Category.sync({ alter: true });
  return Category;
};

module.exports = Category;
