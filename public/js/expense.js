// Get the expense list container element
// const expenseList = document.getElementById('expenses-list');

// // Function to create an HTML element for each expense object
// function createExpenseElement(expense) {
//   const div = document.createElement('div');
//   div.classList.add('expense');

//   const amount = document.createElement('span');
//   amount.classList.add('expense-amount');
//   amount.textContent = expense.amount;

//   const description = document.createElement('span');
//   description.classList.add('expense-description');
//   description.textContent = expense.description;

//   const category = document.createElement('span');
//   category.classList.add('expense-category');
//   category.textContent = expense.category;

//   div.appendChild(amount);
//   div.appendChild(description);
//   div.appendChild(category);

//   return div;
// }

// // Function to display the expense list
// function displayExpenses(expenses) {
//   // Clear the expense list container
//   expenseList.innerHTML = '';

//   // Loop through the expenses array and create an HTML element for each expense
//   expenses.forEach((expense) => {
//     const expenseElement = createExpenseElement(expense);
//     expenseList.appendChild(expenseElement);
//   });
// }

document.querySelector('expense-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    getExpense();
})
// Fetch the list of expenses from the server
function getExpenses() {
  fetch('/expenses')
    .then((response) => response.json())
    .then((data) => {
      // Display the list of expenses
      displayExpenses(data.expenses);
    })
    .catch((error) => {
      console.error(error);
    });
}



// // Call the getExpenses function to fetch and display the list of expenses
// getExpenses();
