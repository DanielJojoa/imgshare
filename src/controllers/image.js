const path = require('path');
const ctrl = {};
const {randomName} = require('../hepers/libs');
const fs = require('fs-extra');

ctrl.index = (req, res)=>{
    
}; 
ctrl.create = async (req, res)=>{
    const imageName = randomName();
    console.log(`nombre aleatorio ${imageName}`)
    const ext = path.extname(req.file.originalname).toLowerCase();
    const imageTempPath = req.file.path;
    const targetPath = path.resolve(`src/public/upload/${imageName}${ext}`)

    if(ext ==='.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
        await fs.rename(imageTempPath,targetPath);
    }
    console.log(req.file);
    res.send('work');
    
}; 
ctrl.like = (req, res)=>{

}; 
ctrl.comment = (req, res)=>{

}; 
ctrl.remove = (req, res)=>{

}; 
module.exports = ctrl;
