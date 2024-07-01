function myTimeOut(callback, duration) {
  setTimeout(callback, duration);
}

console.log("Outside");

myTimeOut(() => {
  console.log("Anonymous");
}, 1000);
