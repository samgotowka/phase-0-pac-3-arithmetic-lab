function add(a , b) {
    return a + b;
} 
function subtract(a , b) {
    return a- b;

}
function multiply(a , b) {
    return a * b;
}
function divide(a , b) {
    return a / b;
}
let number = 10;
function add5() {
    return (number+=5);
}
function divideBy3() {
    return (number/=3);
}

function increment(n) {
 return (n+=1);
 console.log(increment(n));

}
function decrement(n) {
    return (n-=1);
    console.log(decrement(n));
}

function makeInt() {
    parseInt('a' ,10);
    console.log(parseInt());
}
function preserveDecimal(string) {
    parseFloat('a');
    console.log(parseFloat())
}

