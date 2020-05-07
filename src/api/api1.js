module.exports=function (app) {
    app.get("/api/api",(req,res)=>{
        res.json(require("./api.json"))
    })
};