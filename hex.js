const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexValue = '#';
  for (i = 0; i < 6; i++) {
    hexValue += hex[getRandomNumber()];
  }
  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
