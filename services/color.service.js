const { color } = require("../dbInstance");

const createColor = async (data) => {
  return await color.create(data);
};

const findAllColor = async () => {
  return await color.findAll({ raw: true });
};

const findColorById = async (id) => {
  return await color.findOne({ where: { id: id } });
};
const deleteColorById = async (color) => {
  return await color.destroy();
};

const updateColor = async (updateColorObj, id) => {
  return await color.update(updateColorObj, { where: { id: id } });
};
module.exports = { createColor, findAllColor, findColorById, deleteColorById, updateColor };
