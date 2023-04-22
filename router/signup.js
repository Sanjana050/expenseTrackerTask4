const express=require('express');
const router=express.Router();

const signupController=require('../controllers/signup');

router.post('/sign-up',signupController.getSignup);
router.post('/adduser',signupController.postAddUser)
router.get('/',signupController.getWelcomePage);


module.exports=router;