const ctrl = {}

ctrl.index = (req,res)=>{
    console.log('entra1');
    
    res.send('Index Page')
};

module.exports = ctrl;