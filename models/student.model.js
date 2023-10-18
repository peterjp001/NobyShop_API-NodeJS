const { Sequelize, DataTypes } = require("sequelize");
const dbInstance = require("../dbInstance");

const Student = dbInstance.define(
  "student",
  {
    student_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 100] }
    }
  },
  { freezeTableName: true }
);

module.exports = Student;
