const studentService = require("../services/student.service");

const createStudent = async (req, res) => {
  const all = await studentService.findAllStudent();
  return res.send(all);
};

const findAllStudent = async (req, res) => {
  const { first_name } = req.body;
  const student = { first_name: first_name };
  studentService.createStudent(student).then((data) => {
    res.send(data.toJSON());
  });
};

module.exports = { createStudent, findAllStudent };
