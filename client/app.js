const expenses = [
    {
        title :"lunch",
        amount : 200,
        category :"food",
        date : "2026-07-31",
    },

    {
        title : "gym",
        amount : 1000,
        category :"gym",
        date :"2026-08-01",
    },
    
    {
        title : "grocery",
        amount : 5000,
        category : "grocery",
        date :"2026-08-30",
    }
]
expenses.push({
    title : "clothes",
    amount : 4000,
    category : "shopping",
    date :"2026-08-31",
});

const titleInput = document.getElementById("title");

const amountInput = document.getElementById("amount");

const categoryInput = document.getElementById("category");

const dateInput = document.getElementById("date");

const element = document.getElementById("button");

element.addEventListener("click", function(){
    const title = titleInput.value;
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;

    const newExpenses = 
        {
            title :title,
            amount : amount,
            category :category,
            date : date,
        };

    expenses.push(newExpenses);
    updateTotal(expenses);
});

function updateTotal(expenses){
    let total = 0;
    expenses.forEach(function(expense){
        total = total + expense.amount;
    });

    const totalInput = document.getElementById("totalExpenses");
    totalInput.textContent = total;
}

function renderExpenses(expenses){
    const expenseList = document.getElementById("expenseItems");
    expenses.forEach(function(expense){
        const ele = document.createElement("li");
        
        ele.textContent = `${expense.title}- ₹${expense.amount}- ${expense.category}- ${expense.date}`;
        expenseList.appendChild(ele);
    });
}
        
updateTotal(expenses);
renderExpenses(expenses);

