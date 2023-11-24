const { Sequelize, DataTypes } = require("sequelize");
const constant = require("../utils/constant");

const Size = (instance) => {
  const Size = instance.define(
    "size",
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
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: constant.MSG_REQUIRE_CODE
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

  return Size;
  // await Size.sync({ alter: true });
};

module.exports = Size;
