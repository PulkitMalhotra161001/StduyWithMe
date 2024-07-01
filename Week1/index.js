//for Each loop
// const init = [1, 2, "Hello", 3, 4];

// function logThing(thing) {
//   console.log(thing);
// }

// init.forEach(logThing);

//object

/*
let obj = {
  firstName: "Pulkit",
  lastName: "Malhotra",
  skills: ["Java", "Python", "JavaScript"],
  age: 23,
};
let newObj = Object.assign({}, obj, { newProperty: "newValue" });

console.log(obj.ok);
if (obj.hasOwnProperty("ok")) {
} else {
  obj = Object.assign({}, obj, { ok: 12 });
}

console.log(obj);
*/

var users = [
  {
    name: "John",
    kidney: [{ health: false }, { health: false }],
  },
];

var name = "Virk";
var found = false;
for (let i in users) {
  if (users[i].name === name) {
    found = true;
  }
}

if (!found) {
  users.push({ name: name, kidney: [{ health: false }, { health: false }] });
}

for (const property in users) {
  console.log(users[property]);
}
