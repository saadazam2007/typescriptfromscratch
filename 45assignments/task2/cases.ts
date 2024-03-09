let myString = "Moiz Khan";

// Title Case
console.log(
  "Title Case:",
  myString.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
);
console.log("Title Case:",myString.replace(/\bw/g, c=> c.toLocaleLowerCase()))

// Lower Case
console.log("Lower Case:", myString.toLowerCase());

// Upper Case
console.log("Upper Case:", myString.toUpperCase());