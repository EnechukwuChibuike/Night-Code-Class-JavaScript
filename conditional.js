// if statement

let user = "Phil";

if (user == "Josh") {
  console.log("You're welcome, Manager");
} else {
  console.log("You are not permitted to join, Mr!");
}

let day = "Thursday";

if (day === "Monday") {
  console.log("Go to school.");
} else if (day === "Tuesday") {
  console.log("Go to work.");
} else if (day === "Wednesday") {
  console.log("Go to church");
} else {
  console.log("Enjoy!");
}

// Ternary Operator

let newUser = user === "Philip" ? console.log("Hi") : console.log("Hmm");

let newDay =
  day === "Monday"
    ? console.log("Go to school")
    : day === "Tuesday"
    ? console.log("Go to work")
    : day === "Wednesday"
    ? console.log("Go to church")
    : console.log("Enjoy");

console.log(newUser);
