const express=require('express');
const path=require('path')
const app=express();
const sequelize=require('./util/database')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const routeUser=require('./router/signup');
const routeLogin=require('./router/login')
app.use(express.static(path.join(__dirname,'../','views')))
app.use(routeUser)
app.use(routeLogin);


sequelize.sync().then((result)=>{
    console.log(result);
    app.listen(80);
}).catch((err)=>{
    console.log(err)
})
