const User=require('../model/user');
const path=require('path');
const validate=(email,password)=>{
    return User.findAll().then((users)=>{
        for(let user of users){

             if(user.email===email && user.password===password)
            {
                return "true";
            }
            else if(user.email===email && user.password!==password)
            {
                return "wrong password"
            }
        }
           
                return "user does not exist"
            
          
           
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
    if(result=="user does not exist"){
res.status(404).sendFile(path.join(__dirname,'../','views','loginfail.html'))
    }
    else if(result=="wrong password"){
        res.status(401).sendFile(path.join(__dirname,'../','views','passwrong.html'))
    }
    else if(result=="true")
       {
        console.log('successful')
res.redirect('/expense');
    }
   })
    
}
exports.signupuser=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'))
}