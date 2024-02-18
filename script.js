// Cache DOM elements
let billAmountInput = document.getElementById('bill');
let tipPerInput = document.getElementById('tip');
let tipAmountDisplay = document.getElementById('tipAmount');
let totalAmountDisplay = document.getElementById('totalAmount');

function calc() {
  let billAmount = parseFloat(billAmountInput.value);
  let tipPer = parseFloat(tipPerInput.value);

  // Tip Amount
  let tipAmount = (billAmount * tipPer) / 100;
  tipAmountDisplay.textContent = `Tip Amount : £ ${tipAmount.toFixed(2)}`;

  // Total Amount
  let totalAmount = billAmount + tipAmount;
  totalAmountDisplay.textContent = `Total Amount : £ ${totalAmount.toFixed(2)}`;
}

function reset() {
  billAmountInput.value = '';
  tipPerInput.value = '';
  tipAmountDisplay.textContent = 'Tip Amount :';
  totalAmountDisplay.textContent = 'Total Amount :';
}
