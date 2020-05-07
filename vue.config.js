// const kkk=require("./src/api/api1");
module.exports={
    publicPath:'/',
    outputDir:'dist',
    devServer:{
        open:true,     //启动项目时默认打开
        host:"127.0.0.1",     //ip地址
        port:'9999',      //端口
        proxy:{   //代理
          '/api':{
              //请求地址
              target:' https://www.easy-mock.com/mock/5d1492b8634bd559360733e6/example',
              //如果要代理   websockets
              ws:true,
              //是否跨域
              changeOrigin: true
          }
        },
        https:false,   //提供在服务器内部的所有其他中间件之前执行自定义中间件的能力//这可以用于定义自定义处理程序
        // before:(app)=>{
   // app.get('/api/api',(req,res)=>{
   //     res.json(require("./src/api/api.json"))
   // })
   //          kkk(app)
   //      }
    }
};