// Example:
// document.getElementById("demo").innerHTML = "Hello World!";
// In the example above, getElementById is a method, while innerHTML is a property.

// The most common way to access an HTML element is to use the id of the element.
// The innerHTML property is useful for getting or replacing the content of HTML elements.
document.getElementById("text-1").innerHTML = "Using JS Dom to add text";

// document.getElementById(id)	Find an element by element id
console.log(document.getElementById("text-1"));
// document.getElementsByTagName(name)	Find elements by tag name
console.log(document.getElementsByTagName("p"));
// document.getElementsByClassName(name)	Find elements by class name
// Note: getElementsByClassName returns an array
console.log(document.getElementsByClassName("text-3"));

// element.innerHTML =  new html content	Change the inner HTML of an element
document.getElementsByClassName("text-4")[0].innerHTML = "Some more text";
// element.attribute = new value	Change the attribute value of an HTML element
document.getElementById("mcdonalds").type = "text"; 
// element.style.property = new style	Change the style of an HTML element
document.getElementById("text-1").style.fontSize = "22px";
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element

// This example finds the element with id="main", and then finds all <p> elements inside "main":
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
console.log(y);

// If you want to find all HTML elements that match a specified CSS selector 
// (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
// This example returns a list of all <p> elements with class="intro".
const z = document.querySelectorAll("p.intro");

// HTML form validation can be done by JavaScript.
// If a form field (fname) is empty, this function alerts a message, 
// and returns false, to prevent the form from being submitted:
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

// TML form validation can be performed automatically by the browser:

// If a form field (fname) is empty, the required attribute prevents this form from being submitted:
{/* <form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form> */}

// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:
function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

// The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. 
// First when a mouse-button is clicked, the onmousedown event is triggered, then, 
// when the mouse-button is released, the onmouseup event is triggered, finally, 
// when the mouse-click is completed, the onclick event is triggered.
function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

// The addEventListener() method attaches an event handler to the specified element.
// You can easily remove an event listener by using the removeEventListener() method.