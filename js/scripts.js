// get id function 

function getElement(id) {
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
const remaingBalance = getElement('ramain-balance');
const erorrMasage = getElement('eror-masage');

// expense and remaing balance calculation 



document.getElementById('calculate-btn').addEventListener('click',
    function () {
        if (isNaN(incomeInput.value && foodInput.value && rentInput.value && clothInput.value && saveInput.value)) {
            const totalExpenseTaka = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
            totalExpense.innerText = totalExpenseTaka;
            totalBalance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenseTaka);

            //  saving balance calculation 
            document.getElementById('save-btn').addEventListener('click',
                function () {
                    const saveTaka = (parseFloat(incomeInput.value)) * ((parseFloat(saveInput.value)) / (100));
                    savingAmount.innerText = parseFloat(saveTaka)
                    remaingBalance.innerText = parseFloat(incomeInput.value) - (parseFloat(totalExpenseTaka) + parseFloat(saveTaka))
                })
            
        }
        else{
            erorrMasage.innerText = 'Please enter a number!!!!'
            incomeInput.value = '';
            foodInput.value = '';
            rentInput.value = '';
            clothInput.value = '';
            saveInput.value= '';
            erorrMasage.style.display = 'block';
        }


    })



