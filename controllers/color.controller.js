const colorService = require("../services/color.service");

const createColor = (req, res) => {
  const { name, code } = req.body;
  colorService.createColor({ name, code }).then((data) => {
    res.send(data.toJSON());
  });
};

const findAllColor = async (req, res) => {
  const all = await colorService.findAllColor();
  return res.send(all);
};
const findColorById = async (req, res) => {
  const id = req.params.id;
  const color = await colorService.findColorById(id);
  if (!color) return res.status(400).send(`Color with the id given "${id}" not found`);
  return res.send(color);
};
const deleteColorById = async (req, res) => {
  try {
    const id = req.params.id;
    const color = await colorService.findColorById(id);
    if (!color) return res.status(400).send(`Color with the id given "${id}" not found`);
    await colorService.deleteColorById(color);
    return res.send("Color deleted");
  } catch (error) {
    console.log(error);
  }
};

const updateColor = async (req, res) => {
  try {
    const id = req.params.id;
    const color = await colorService.findColorById(id);
    if (!color) return res.status(400).send(`Color with the id given "${id}" not found`);

    await colorService.updateColor({ name: req.body.name, code: req.body.code }, id);

    const modifiedColor = await colorService.findColorById(id);
    res.send(modifiedColor);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createColor, findAllColor, findColorById, updateColor, deleteColorById };
