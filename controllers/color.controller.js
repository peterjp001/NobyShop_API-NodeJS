const AppError = require("../utils/CustomError");
const colorService = require("../services/color.service");
const constant = require("../utils/constant");
const { errorstringify } = require("../utils/errorHandler");

// refractor getting color by id
const getColorByID = async (id) => {
  const color = await colorService.findColorById(id);
  if (!color) throw new AppError(errorstringify(constant.MSG_ID_NOT_FOUND("Color", id), 404));
  return color;
};

// CREATE COLOR
const createColor = async (req, res) => {
  const { name, code, description } = req.body;
  const data = await colorService.createColor({ name, code, description });
  res.send(data.toJSON());
};

// FIND ALL COLORS
const findAllColor = async (req, res) => {
  const all = await colorService.findAllColor();
  return res.send(all);
};

// FIND COLOR BY ID
const findColorById = async (req, res) => {
  const id = req.params.id;
  const color = await getColorByID(id);
  return res.send(color);
};

// DELETE COLOR BY ID
const deleteColorById = async (req, res) => {
  const id = req.params.id;
  const color = await getColorByID(id);
  await colorService.deleteColorById(color);

  return res.json({ msg: "Color deleted", isDeleted: true });
};

// UPDATE COLOR
const updateColor = async (req, res) => {
  const id = req.params.id;
  const { name, code, description } = req.body;

  await getColorByID(id);
  await colorService.updateColor({ name, code, description }, id);

  const modifiedColor = await colorService.findColorById(id);
  return res.send(modifiedColor);
};

module.exports = { createColor, findAllColor, findColorById, updateColor, deleteColorById };
