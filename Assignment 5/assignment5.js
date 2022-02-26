document.getElementById('Calculate-btn').addEventListener('click', function(){
    // ********incomefield
    const incomeText = document.getElementById('income-field');
    const incomeField = incomeText.value;
    const incomeTotall = parseFloat(incomeField);
    incomeText.innerText = incomeTotall;
    // incomeText.value = '';

    

    
    //********** */ foodfield
    const foodText = document.getElementById('food-field');
    const foodField =foodText.value;
   
    const foodTotall = parseFloat(foodField);
    // foodText.value = '';



    //************Rent Field */
     const rentText = document.getElementById('rent-field');
     const rentFiled = rentText.value;
     const rentTotall = parseFloat(rentFiled);
    //  rentText.value = '';




    //  ***************clothes Field 

    const clothsText = document.getElementById('clothes-field');
    const clothesField = clothsText.value;
    const clothesTotall= parseFloat(clothesField);
    // clothsText.value = '';



    // *************expenses field

    const expensesText = document.getElementById('expenses-field');
    const expensesField = expensesText.innerText;
    const expensesTotall = parseFloat(expensesField);
    const newExpensesTotall = expensesTotall + foodTotall + rentTotall + clothesTotall;
    expensesText.innerText = newExpensesTotall;
    


    // **************Balance Field

    const balanceText = document.getElementById('balance-field');
    const balanceField = balanceText.innerText;
    const balanceTotall = parseFloat(balanceField);
    const newBalanceTotall =incomeTotall - foodTotall - rentTotall - clothesTotall + balanceTotall;
    balanceText.innerText = newBalanceTotall ;

// ********************************


  if(incomeText.value==''){
      alert('please put a number')
  }
  if(foodText.value==''){
      alert('please put a number')
  }
  if(rentText.value==''){
      alert('please put a number')
  }
  if(clothsText.value==''){
      alert('please put a number')
  }



//   *****************************
  if(incomeText.value < 0){
      alert('please put a valid number')
  }
  if(foodText.value < 0){
      alert('please put a valid number')
  }
  if(rentText.value < 0){
      alert('please put a valid number')
  }
  if(clothsText.value < 0){
      alert('please put a valid number')
  }
// ***********************************





})

