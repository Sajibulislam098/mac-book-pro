
document.getElementById('memory-plus').addEventListener('click', function () {
    const memoryInput = document.getElementById('memory-total');
    const memoryNumber = memoryInput.value;
    memoryInput.value = parseInt(memoryNumber);

})



// function updateProductNumber(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + '-number');
//     let productNumber = productInput.value;
//     if (isIncreasing) {
//         productNumber = parseInt(productNumber) + 1;

//     }
//     else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;

//     }
//     productInput.value = productNumber;

//     // update total
//     const productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = productNumber * price;
//     // calculate calculateTotal

//     calculateTotal();

// }
// function getInputValue(product) {
//     const productInput = document.getElementById(product + '-number');
//     const productNumber = parseInt(productInput.value);
//     return productNumber;
// }
// function calculateTotal() {
//     const phoneTotal = getInputValue('memory') * 1219;
//     const caseTotal = getInputValue('storage') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 10;
//     const totalPrice = subTotal + tax;
//     // update on HTML
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total-price').innerText = totalPrice;
// }
// // phone increase decrease event
// document.getElementById('memory-plus').addEventListener('click', function () {
//     updateProductNumber('memory', 1219, true);
// })
// document.getElementById('memory-minus').addEventListener('click', function () {
//     updateProductNumber('memory', 1219, false);
// })
// // handle case increase decrease
// document.getElementById('storage-plus').addEventListener('click', function () {
//     updateProductNumber('storage', 59, true);
// })

// document.getElementById('storage-minus').addEventListener('click', function () {
//     updateProductNumber('storage', 59, false);
// })






