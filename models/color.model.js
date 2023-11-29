const { Sequelize, DataTypes } = require("sequelize");
const constant = require("../utils/constant");

const Color = (instance) => {
  const Color = instance.define(
    "color",
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
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Name")
          },
          len: {
            args: [3], // Minimum value
            msg: constant.MSG_LENGTH("Name", { min: 3 })
          }
        }
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: constant.MSG_REQUIRE_FIELD("Code")
          },
          len: {
            args: [3], // Minimum value
            msg: constant.MSG_LENGTH("Code", { min: 3 })
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

  // await Color.sync({ alter: true });

  return Color;
};

module.exports = Color;
