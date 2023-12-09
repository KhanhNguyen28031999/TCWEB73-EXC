const requireApiKey = (req,res,next) => {
    if (!req.querry.apiKey){
        res.send("Api Key is missing");
        return;
    }else{
        next();
    }
}

module.exports = requireApiKey