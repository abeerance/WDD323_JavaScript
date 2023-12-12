// Select the HTML body, where you want to isnert your element
const htmlBody = document.querySelector("body");

/*
    Syntax:
    document.createElement("html_tag")
*/

// Create a new element and store it inside a variable
const myParagraph = document.createElement("p");
// To add a textContent in an HTML elemen use textContent
myParagraph.textContent = "I am a new paragraph";
// 1. add a class "special" to the paragraph
myParagraph.classList.add("special");
// 2. add an id of "first" to the paragraph (hint: setAttribute)
myParagraph.setAttribute("id", "first");
// 3. append the paragraph to the body
htmlBody.appendChild(myParagraph);

/*
    let's add an image to make it beautiful
*/
const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice image";

htmlBody.appendChild(myImage);

/*
    It's possible to create nested elements
*/
function addElement() {
  // 1st div
  const newDiv1 = document.createElement("div");
  newDiv1.classList.add("wrapper");
  // 2nd div
  const newDiv2 = document.createElement("div");
  newDiv2.classList.add("2nd-wrapper");
  // paragraph
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "I am a paragraph inside a div";

  // append everything together
  htmlBody.appendChild(newDiv1);
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newParagraph);
}

// call the function
addElement();
