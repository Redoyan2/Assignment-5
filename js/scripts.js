// get id function 

function getElement(id){
    return document.getElementById(id);
}

const incomeInput = getElement('income-input');
const foodInput = getElement('food-input');
const rentInput = getElement('rent-input');
const clothInput = getElement('cloth-input');
const saveInput = getElement('save-input');
const totalBalance = getElement('total-balance');
const totalExpense = getElement('total-expense');
const savingAmount = getElement('saving-amount');
const ramaingBalance = getElement('ramain-balance');
const erorrMasage = getElement('eror-masage');

document.getElementById('calculate-btn').addEventListener('click', 
function(){
    const totalExpenseTaka = parseFloat(foodInput.value)+parseFloat(rentInput.value)+parseFloat(clothInput.value);
    totalExpense.innerText = totalExpenseTaka;
    totalBalance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenseTaka);

    console.log(totalExpense.innerText);

})