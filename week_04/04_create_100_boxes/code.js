// Write a code that will create 100 boxes in the page
// Each box should be 100px by 100px
// Even and odd boxes should have different colors (evens: blue, odds: red)

// STEP BY STEP
// 1: Create a loop that iterates 100 times
for (let i = 0; i < 100; i++) {
  // EVERY styp afterwards is inside the loop
  // 2: Create a div and save it in a variable (we'll call it box)
  const box = document.createElement("div");
  // 3. Set the styles for all boxes (all boxes have the same width and height)
  box.style.width = "100px";
  box.style.height = "100px";

  // 4. Check if the current i value (iteration) is even or odd using modulo
  if (i % 2 === 0) {
    // if the current iteration / 2 has no rest (modulo 0) then it's even => backgroundColor blue
    box.style.backgroundColor = "blue";
  } else {
    // if the current iteration / 2 has a rest (rest modulo) then it's odd => backgroundColor red
    box.style.backgroundColor = "red";
  }

  // if you use ternary operator instead of if/else, it would look like this:
  //   box.style.background = i % 2 === 0 ? "blue" : "red";

  // 5. Append element (child) to the page in the container
  document.querySelector(".container").appendChild(box);
}
