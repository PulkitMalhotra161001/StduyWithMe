const express = require("express");

const app = express();
const port = 3000;

var users = [
  {
    name: "John",
    kidney: [{ health: false }, { health: false }],
  },
];

function checkUser(name) {
  var found = false;
  for (let i in users) {
    if (users[i].name === name) {
      found = true;
    }
  }

  if (!found) {
    users.push({
      name: `${name}`,
      kidney: [{ health: false }, { health: false }],
    });
  }
}

function getData() {
  var data = "";

  for (let u in users) {
    data += users[u].name + " has " + users[u].kidney.length + " kidney: ";

    for (let i in users[u].kidney) {
      data += users[u].kidney[i].health + ", ";
    }
    data += "<br>";
  }

  return data;
}

function updateHealth(name) {
  for (let u in users) {
    if (users[u].name === name) {
      for (let i in users[u].kidney) {
        if (users[u].kidney[i].health == false) {
          users[u].kidney[i].health = true;
          return true;
        }
      }
    }
  }

  return false;
}

function addHeadlth(name) {
  for (let i in users) {
    if (users[i].name === name) {
      users[i].kidney.push({ health: true });
      break;
    }
  }
}

function deleteHealth(name) {
  for (let u in users) {
    if (users[u].name === name) {
      for (let i in users[u].kidney) {
        if (users[u].kidney[i].health == false) {
          users[u].kidney.splice(i, 1);
          break;
        }
      }
    }
  }
}

app.get("/", (req, res) => {
  var data = getData();
  res.send(data);
});

app.post("/", (req, res) => {
  var name = req.query.name;
  checkUser(name);
  addHeadlth(name);

  var data = getData();
  res.send(data);
});

app.put("/", (req, res) => {
  var name = req.query.name;
  checkUser(name);
  var update = updateHealth(name);
  if (!update) {
    res.status(411).json({
      msg: "all kidney is healthy",
    });
  } else {
    var data = getData();
    res.send(data);
  }
});

app.delete("/", (req, res) => {
  var name = req.query.name;
  checkUser(name);
  deleteHealth(name);
  var data = getData();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening port: ${port}`);
});
