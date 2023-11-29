const AppError = require("../utils/CustomError");
const sizeService = require("../services/size.service");
const constant = require("../utils/constant");
const { errorstringify } = require("../utils/errorHandler");

// refractor getting size by id
const getSizeByID = async (id) => {
  const size = await sizeService.findSizeById(id);
  if (!size) throw new AppError(errorstringify(constant.MSG_ID_NOT_FOUND("Size", id), 404));
  return size;
};

// CREATE COLOR
const createSize = async (req, res) => {
  const { name, code, description } = req.body;
  const data = await sizeService.createSize({ name, code, description });
  res.send(data.toJSON());
};

// FIND ALL COLORS
const findAllSize = async (req, res) => {
  const all = await sizeService.findAllSize();
  return res.send(all);
};

// FIND COLOR BY ID
const findSizeById = async (req, res) => {
  const id = req.params.id;
  const size = await getSizeByID(id);
  console.log("im hereeee");
  return res.send(size);
};

// DELETE COLOR BY ID
const deleteSizeById = async (req, res) => {
  const id = req.params.id;
  const size = await getSizeByID(id);
  await sizeService.deleteSizeById(size);

  return res.json({ msg: "Size deleted", isDeleted: true });
};

// UPDATE COLOR
const updateSize = async (req, res) => {
  const id = req.params.id;
  const { name, code, description } = req.body;

  await getSizeByID(id);
  await sizeService.updateSize({ name, code, description }, id);

  const modifiedSize = await sizeService.findSizeById(id);
  return res.send(modifiedSize);
};

module.exports = { createSize, findAllSize, findSizeById, updateSize, deleteSizeById };
