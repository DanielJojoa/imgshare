const Comments =  require('./comments');
const Images = require('./images');
const Libs =  require('./libs');
const Stats =  require('./stats');

module.exports =  async function(viewModel)
{
    
   const results = await Promise.all([Images.popular(), Stats(), Comments.newest()])
    viewModel.sidebar = {
        stats: results[1],
        popular: results[0],
        comments: results[2]

    };
    return viewModel;


}