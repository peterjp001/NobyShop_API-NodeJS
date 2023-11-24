const { color } = require("../dbInstance");

const createColor = async (data) => {
  try {
    return await color.create(data);
  } catch (error) {
    console.log(error);
  }
};

const findAllColor = async () => {
  try {
    return await color.findAll({ raw: true });
  } catch (error) {
    console.log(error);
  }
};

const findColorById = async (id) => {
  try {
    return await color.findOne({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }
};
const deleteColorById = async (color) => {
  try {
    return await color.destroy();
  } catch (error) {
    console.log(error);
  }
};

const updateColor = async (updateColorObj, id) => {
  try {
    return await color.update(updateColorObj, { where: { id: id } });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createColor, findAllColor, findColorById, deleteColorById, updateColor };
