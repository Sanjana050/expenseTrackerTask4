const User=require('../model/user');
const path=require('path');
const validate=(email,password)=>{
    return User.findAll().then((users)=>{
        return users.some((user)=>{
            (user.email===email && user.password===password)
        })
    }).catch((err)=>{
        console.log(err)
    })
}
exports.loginPage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'))
}
exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    
   validate(email,password).then((result)=>{
    if(result==false){
res.sendFile(path.join(__dirname,'../','views','loginfail.html'))
    }
    else{
res.redirect('/expense');
    }
   })
    
}
exports.signupuser=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'))
}