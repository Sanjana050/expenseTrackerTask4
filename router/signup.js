const express=require('express');
const router=express.Router();

const loginController=require('../controllers/login')
const signupController=require('../controllers/signup');

router.post('/sign-up',signupController.getSignup);
router.post('/adduser',signupController.postAddUser)
router.get('/adduser',loginController.loginPage);

router.get('/',signupController.getWelcomePage);


module.exports=router;