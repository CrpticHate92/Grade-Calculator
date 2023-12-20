// // Prompts
// // Input
// let grade1 = +prompt("Enter your first grade");
// let grade2 = +prompt("Enter your second grade");
// let grade3 = +prompt("Enter your third grade");
// let grade4 = +prompt("Enter your fourth grade");
// let grade5 = +prompt("Enter your final grade");
// // Process
// let calculate = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
// // Output
// alert(`"Your Average is " ${calculate}`);

// Button
document.getElementById("btn").addEventListener("click", buttonclicked);

function buttonclicked() {
  // Input
  let grade1 = +document.getElementById("grade1").value;
  let grade2 = +document.getElementById("grade2").value;
  let grade3 = +document.getElementById("grade3").value;
  let grade4 = +document.getElementById("grade4").value;
  let grade5 = +document.getElementById("grade5").value;
  // Process
  let calculate = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  // Output
  document.getElementById("output").innerHTML = calculate;
}
