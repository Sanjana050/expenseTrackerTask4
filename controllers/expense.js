const path=require('path')
const Expense=require('../model/expense')

const getAllexpenses=(req,res,next)=>{
    
     Expense.findAll().then((expenses)=>{
         res.render('expense',{ expenses: expenses });
     }).catch(err=>{
         console.log(err)
     })
 }
exports.getExpense=(req,res,next)=>{
    const expense=[];
    Expense.findAll().then((expenses)=>{
        if(expenses==null){
            res.render('expense',{expenses:[]});
        }
        else{
            const expenseArr=[...expenses];
            res.render('expense',{expenses:expenseArr})
        }
    }).catch((err)=>{
        console.log(err)
    })
   
}

exports.postaddexpense=(req,res,next)=>{
   const amount=req.body.amount;
   const description=req.body.description;
   const category=req.body.category;

   Expense.create({
    amount:amount,
    description:description,
    category:category
   }).then(()=>{
    console.log('expense added');
    
   getAllexpenses(req,res);
   
   }).catch((err)=>{
    console.log(err);
    res.status(500).send('Internal server error')
   })
    
}

exports.deleteItem=(req,res,next)=>{
    

    const id=req.body.expenseId;
    console.log(id);
    Expense.findByPk(id).then((expense)=>{
        if(!expense)
        {
            return;
        }
return expense.destroy();
    }).then(()=>{
        console.log('item removed')
        res.redirect('/expense')
    }).catch((err)=>{
        console.log(err)
    })

    
}

