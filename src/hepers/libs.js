const helpers = {};
helpers.randomName = ()=>{
    const possible='abcdefghijklmnopqrstuvwxyz1023654789';
    let name= '';
    for(let i = 0 ; i<20 ; i++){
        name += possible.charAt(Math.floor(Math.random()*possible.length));

    }
    return name;
}

module.exports =  helpers;