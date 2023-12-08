// Get references to the form and its inputs
const form = document.querySelector('form');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const opSelect = document.getElementById('op');
const resultElement = document.getElementById('result');

// Add event listeners to the form and its inputs
form.addEventListener('submit', (event) => {
 // Prevent the default form submission behavior
 event.preventDefault();

 // Get the values of the input fields
 const num1Value = parseFloat(num1Input.value);
 const num2Value = parseFloat(num2Input.value);
 const opValue = opSelect.value;

 // Perform the calculation based on the selected operation
 let result;
 switch (opValue) {
   case '+':
     result = num1Value + num2Value;
     break;
   case '-':
     result = num1Value - num2Value;
     break;
   case '*':
     result = num1Value * num2Value;
     break;
   case '/':
     result = num1Value / num2Value;
     break;
   default:
     result = 'Invalid operation';
     break;
 }

 // Display the result in the "Result" field
 resultElement.innerHTML = `The result is ${result}`;
});

// Add keyboard shortcuts to the buttons
document.onkeydown = function(event) {
 if (event.key === 'Enter') {
   form.dispatchEvent(new Event('submit'));
 }
};
