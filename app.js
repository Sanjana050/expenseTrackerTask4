const express=require('express');
const app=express();
const sequelize=require('./util/database')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const routeUser=require('./router/signup');
const routeLogin=require('./router/login')
app.use(routeLogin);
app.use(routeUser);

sequelize.sync().then((result)=>{
    console.log(result);
    app.listen(80);
}).catch((err)=>{
    console.log(err)
})
