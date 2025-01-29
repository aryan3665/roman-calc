// DOM elements ko select kare
const numberInput = document.getElementById('numberInput');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

// Roman numeral mapping
const romanNumerals = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' }
];

// Convert number to Roman numeral
function convertToRoman(num) {
  if (num < 1 || num > 3999) {
    return 'Please enter a number between 1 and 3999.';
  }

  let roman = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return roman;
}

// Convert button click event
convertBtn.addEventListener('click', () => {
  const number = parseInt(numberInput.value);
  const romanNumeral = convertToRoman(number);
  result.textContent = romanNumeral || 'Invalid input!';
});

// Reset button click event
resetBtn.addEventListener('click', () => {
  numberInput.value = '';
  result.textContent = 'Your result will appear here...';
});