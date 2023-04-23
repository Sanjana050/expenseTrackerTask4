const path=require('path');
const User=require('../model/user')
const bcrypt=require('bcrypt');
const saltrounds=10;


const findEmail = (email) => {
    return User.findAll()
      .then((users) => {
        return users.some((user) => user.email === email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  


exports.getWelcomePage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'));

}

exports.getSignup=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'))
}

exports.postAddUser=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const phone=req.body.phone;

    findEmail(email).then((result)=>{
        if(result==true)
        {
            res.sendFile(path.join(__dirname,'../','views','userexists.html'))
            return;
        }
        else{

            bcrypt.hash(password, saltrounds, (err, hash) => {
                if (err) {
                  console.log(err.message);
                  res.status(500).send("Internal Server Error");
                  return;
                }

            User.create({
                name:name,
                email:email,
                password:hash,
                phone:phone
            }).then((result)=>{
                console.log('User added');
                res.redirect('/adduser');
            
            }).catch((err)=>{
                console.log(err.message); // log the error message to the console
                res.status(500).send('Internal Server Error');
            });
        })
    }

})
}
