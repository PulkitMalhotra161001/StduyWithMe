// Define the API URL
const apiUrl = "https://fakerapi.it/api/v1/persons";
var names = [];

function getDataUsingPromise() {
  // Make a GET request
  fetch(apiUrl)
    //response is a promise so we use then
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //json will grab json data from response
      return response.json();
    })
    //it is also promise so we use then
    .then((data) => {
      for (let d in data.data) {
        names.push(data.data[d].firstname + " " + data.data[d].lastname);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function getDataUsingAwsyncAwait() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  for (let d in data.data) {
    names.push(data.data[d].firstname + " " + data.data[d].lastname);
  }
  console.log(names);
}

getDataUsingPromise();
// getDataUsingAwsyncAwait();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(names);
});

app.listen(3000, () => {
  console.log("listen to 3000");
});
