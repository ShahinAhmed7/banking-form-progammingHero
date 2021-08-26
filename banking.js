
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

    // Convert text to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // Clear the deposit input field
    depositInput.value = '';
    
});





// Withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function(){

    // Withdraw input field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    // Withdraw output total balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;




    // Balance total update
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    
    // Clear withdraw input
    withdrawInput.value = '';

});






