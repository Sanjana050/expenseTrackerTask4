const express=require('express');
const router=express.Router();
const expenseController=require('../controllers/expense')


router.post('/add-expense',expenseController.postaddexpense)

router.get('/expense',expenseController.getExpense);

router.post('/delete-expense',expenseController.deleteItem)
module.exports=router;

