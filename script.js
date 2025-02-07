// Function with parameters and return values (calculating area)
function calculateArea(length, width) {
    return length * width;
}

document.getElementById('calcButton').addEventListener('click', function() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let area = calculateArea(length, width);
    document.getElementById('result').innerText = "Area: " + area;
});

// Function demonstrating scope
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // Accessible
    console.log(localVar);    // Accessible
}

scopeExample();
// console.log(localVar); // Uncaught ReferenceError (not accessible outside function)

// Function to toggle animation (modal)
function toggleModal() {
    let modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}

document.getElementById('modalButton').addEventListener('click', toggleModal);
