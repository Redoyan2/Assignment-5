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
        if (((isNaN(incomeInput.value)|| (foodInput.value) || (rentInput.value) || (clothInput.value)) || (incomeInput.value < 0 || foodInput.value < 0 || rentInput.value < 0 || clothInput.value < 0))) {
            erorrMasage.innerText = 'Please enter a positive number!!!!'
            incomeInput.value = '';
            foodInput.value = '';
            rentInput.value = '';
            clothInput.value = '';
            saveInput.value = '';
            erorrMasage.style.display = 'block';
        }
        else {

            const totalExpenseTaka = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value);
            totalExpense.innerText = totalExpenseTaka;
            totalBalance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenseTaka);

            //  saving balance calculation 
            document.getElementById('save-btn').addEventListener('click',
                function () {
                    if (isNaN(saveInput.value) || (saveInput.value < 0)) {
                        erorrMasage.innerText = 'Please enter a positive number!!!!';
                        erorrMasage.style.display = 'block';
                        saveInput.value = '';
                    }
                    else {
                        const saveTaka = (parseFloat(incomeInput.value)) * ((parseFloat(saveInput.value)) / (100));

                        const remainTaka = parseFloat(incomeInput.value) - (parseFloat(totalExpenseTaka) + parseFloat(saveTaka));
                        if (remainTaka >= 0) {
                            remaingBalance.innerText = remainTaka;
                            savingAmount.innerText = parseFloat(saveTaka)
                        }
                        else {
                            erorrMasage.innerText = 'Sufficient Balance!!!!!';
                            erorrMasage.style.display = 'block';
                            savingAmount.innerText = 'Suficient money!!!';
                            remaingBalance.innerText = parseFloat(incomeInput.value) - parseFloat(totalExpenseTaka);
                        }


                    }

                })
        }
    })



