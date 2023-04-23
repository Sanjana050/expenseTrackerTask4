const express=require('express');
const router=express.Router();
const adminController=require('../controllers/login')
router.get('/login',adminController.loginPage);


router.post('/addlogin',adminController.postLogin);
router.post('/adduser',adminController.signupuser)
module.exports=router;