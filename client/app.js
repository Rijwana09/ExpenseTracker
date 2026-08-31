
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

console.log(expenses);

const titleInput = document.getElementById("title");
const title = titleInput.value;
console.log(title);


const amountInput = document.getElementById("amount");

const categoryInput = document.getElementById("category");

const dateInput = document.getElementById("date");

const element = document.getElementById("button");
element.addEventListener("click", function(){
    const title = titleInput.value;
    const amount = amountInput.value;
    const category = categoryInput.value;
    const date = dateInput.value;
});
