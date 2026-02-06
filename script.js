const image = document.getElementByID("laptopImage");
const text = document.getElementById("laptopText");
const button = document.getElementById("spinButton");

const imageOptions = [
  ["richLaptop.png", "Cole's Laptop"],
  ["poorLaptop.png", "Matthew's Laptop"],
];

let imageSource = "";
let text = "";
let isSpinning = false;

function spinWheel() {
  if (isSpinning == false) {
    isSpinning = true;

    for (i = 0; i < 10; i++) {
      image.src = 
    }
  }
};

button.addEventListener("click", spinWheel);
