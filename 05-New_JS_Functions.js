//Function Declaration
function userProfile(name) {
    console.log("Hello, " + name + "!");
}
userProfile("Prasannasrinivas");
//Arrow Function
const double = (num) => num * 2;
console.log(double(5)); 
//Anonymous Function with setTimeout
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);
// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}
getUserData(() => {
    console.log("Call Back Function");
});