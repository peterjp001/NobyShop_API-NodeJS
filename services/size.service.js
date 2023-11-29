const { size } = require("../dbInstance");

const createSize = async (data) => {
  return await size.create(data);
};

const findAllSize = async () => {
  return await size.findAll({ raw: true });
};

const findSizeById = async (id) => {
  return await size.findOne({ where: { id: id } });
};
const deleteSizeById = async (size) => {
  return await size.destroy();
};

const updateSize = async (updateSizeObj, id) => {
  return await size.update(updateSizeObj, { where: { id: id } });
};
module.exports = { createSize, findAllSize, findSizeById, deleteSizeById, updateSize };
