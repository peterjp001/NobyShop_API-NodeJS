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
        unique: true,
        validate: {
          len: { args: [3], msg: constant.MSG_LENGTH("Name", { min: 3 }) },
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Name")
          }
        }
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: { args: [3], msg: constant.MSG_LENGTH("Code", { min: 3 }) },
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Code")
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

  // await Size.sync({ alter: true });
  return Size;
};

module.exports = Size;
