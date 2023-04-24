const express=require('express');
const path=require('path')


const app=express();
const sequelize=require('./util/database')


app.set('view engine', 'ejs');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const routeUser=require('./router/signup');
const routeLogin=require('./router/login')
app.use(express.static(path.join(__dirname,'views')))
const routerExpense=require('./router/expense')

app.use(routeUser)
app.use(routerExpense)
app.use(routeLogin);



sequelize.sync().then((result)=>{
    console.log(result);
    app.listen(80);
}).catch((err)=>{
    console.log(err)
})
