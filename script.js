const grossIncomeInput = document.getElementById('gross-income');
const extraIncomeInput = document.getElementById('extra-income');
const ageSelect = document.getElementById('age');
const deductionsInput = document.getElementById('deductions');
const errorIcons = document.querySelectorAll('.error-icon');
const taxForm = document.getElementById('taxForm');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.getElementsByClassName('close')[0];

// Function to show error icon and tooltip
function showErrorIcon(input, errorIcon) {
  input.classList.add('error');
  errorIcon.style.display = 'inline-block';
}

// Function to hide error icon and tooltip
function hideErrorIcon(input, errorIcon) {
  input.classList.remove('error');
  errorIcon.style.display = 'none';
}

// Function to validate input fields
function validateForm() {
  let isValid = true;

  // Validate gross annual income
  if (!parseFloat(grossIncomeInput.value)) {
    showErrorIcon(grossIncomeInput, errorIcons[0]);
    isValid = false;
  } else {
    hideErrorIcon(grossIncomeInput, errorIcons[0]);
  }

  // Validate extra income
  if (isNaN(extraIncomeInput.value)) {
    showErrorIcon(extraIncomeInput, errorIcons[1]);
    isValid = false;
  } else {
    hideErrorIcon(extraIncomeInput, errorIcons[1]);
  }

  // Validate age
  if (ageSelect.value === '') {
    showErrorIcon(ageSelect, errorIcons[2]);
    isValid = false;
  } else {
    hideErrorIcon(ageSelect, errorIcons[2]);
  }

  // Validate deductions
  if (isNaN(deductionsInput.value)) {
    showErrorIcon(deductionsInput, errorIcons[3]);
    isValid = false;
  }else {
    hideErrorIcon(deductionsInput, errorIcons[3]);
  }

  return isValid;
}

// Function to calculate tax
function calculateTax() {
  const grossIncome = parseFloat(grossIncomeInput.value);
  const extraIncome = parseFloat(extraIncomeInput.value) || 0;
  const age = ageSelect.value;
  const deductions = parseFloat(deductionsInput.value) || 0;

  let overallIncome = grossIncome + extraIncome - deductions;
  let tax = 0;

  if (overallIncome <= 800000) {
    tax = 0;
  } else {
    if (age === '<40') {
      tax = 0.3 * (overallIncome - 800000);
    } else if (age === '>=40&<60') {
      tax = 0.4 * (overallIncome - 800000);
    } else if (age === '>=60') {
      tax = 0.1 * (overallIncome - 800000);
    }
  }

  return tax;
}

// Function to display modal with overall income after tax deduction
function showModal() {
    const grossIncome = parseFloat(grossIncomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value) || 0;
    const deductions = parseFloat(deductionsInput.value) || 0;

    let overallIncome = grossIncome + extraIncome - deductions;
    const taxAmount = calculateTax();  
    const finalAmount = overallIncome - taxAmount;
    modalContent.innerHTML = `<h1>Your overall income will be</h1>
    <p> &#8377 ${finalAmount.toLocaleString()}</p>
    <h4>after tax deductions</h4>`;
    modal.style.display = 'block';
}

taxForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        showModal();
    }
});

closeButton.onclick = function() {
    modal.style.display = 'none';
}