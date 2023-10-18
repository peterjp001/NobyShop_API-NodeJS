const Student = require("../models/student.model");

const createStudent = async (data) => {
  try {
    return await Student.create(data);
  } catch (error) {
    console.log(error);
  }
};

const findAllStudent = async () => {
  try {
    return await Student.findAll({ raw: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createStudent, findAllStudent };
