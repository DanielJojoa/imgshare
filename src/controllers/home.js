const sidebar = require('../hepers/sidebar');
const { Image } = require('../models');

const ctrl = {};

ctrl.index = async (req, res) => {
  const images = await Image
    .find()
    .sort({ timestamp: -1 });
  let viewModel = { images: [] };
  viewModel.images = images;
  viewModel = await sidebar(viewModel);
  console.log(viewModel.comments);
  
  res.render('index', viewModel);
};

module.exports = ctrl;