
const depositBtn = document.getElementById('deposit-button');



depositBtn.addEventListener('click', function(){

    // Deposit input
    const depositInput = document.getElementById('deposit-input');

    // Convert amount text to number
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // Deposit output
    const depositTotal = document.getElementById('deposit-output');
    
    // Convert amount text to number
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);


    const newDepositTotal = previusDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;



    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // Clear the deposit input field
    depositInput.value = '';



   

    
});