let titlenew = document.title = "DomIntro";
console.log(titlenew);

let element = document.getElementById('unique');
console.log(element);

let ele = document.getElementsByClassName('multi');
console.log(ele);

let ele2 = document.querySelector('.multi');
console.log(ele2);

let ele3 = document.querySelectorAll('.multi');
console.log(ele3);

// first assignment ends heree

// Navigation in DOM 

let parentele = document.getElementById("parent");
console.log(parentele); // here we get total div parent element
console.log(parentele.firstChild);
console.log(parentele.lastChild) ; //here we get empty content as first child and last child also, it means this properties gives the content only and there is difference, to access the actual first child have to another properties.
console.log(parentele.children); // here will get the elements in array
console.log(parentele.childNodes);//here will get the content and elements in array


console.log(parentele.children[1]); // by access array of index we can choose the element.
console.log(parentele.children[3]);  // by accessing the array of index is not good practice. the easy way is by using id.

console.log(parentele.childElementCount);

let element2 = document.getElementById('title');
console.log(element2.nextSibling);
console.log(element2.nextElementSibling);
console.log(element2.previousSibling);
console.log(element2.previousElementSibling);
console.log(element2.textContent);
console.log(element2.parentElement);

heading.style.color = 'yellow';
heading.style.backgroundColor = 'lightgreen';
heading.style.fontSize = '100px';
heading.style.fontStyle = 'italic';

console.log(parentele.previousSibling);
console.log(parentele.previousElementSibling);
console.log(parentele.nextSibling);
console.log(parentele.nextElementSibling);
// second assign ends here

//storing h3 element by using id-selector in 'midele' variable.
let midele = document.getElementById("heading");
console.log(midele);

//Applying CSS-property individually:
midele.style.backgroundColor = "green";
midele.style.color = "yellow";
midele.style.fontSize = "50px";

//Applying the CSS-group of properties, by using the cssText.
let ele = document.getElementById("title");
ele.style.cssText =
  "background-color: aquamarine;color: brown; font-style: italic;";

// storing the div element by using id in 'parentele' variable.
let parentele = document.getElementById("parent");
console.log(parentele);

//Applying the css by using class.
parentele.lastElementChild.classList.add("styling");

let paragraph = document.querySelector('.few');
console.log(paragraph);

//Applying the css by using class.
paragraph.classList.add('styling');

//function

function addcss(){
    parentele.lastElementChild.classList.add("styling");
    paragraph.classList.add('styling');
    console.log('clicked on button');
    // test.innerText = 'Learning DOM'
    // test.textContent = 'Learning DOM'
    test.innerHTML = 'Learning <b>DOM</b>'
    
}

function removecss(){
    parentele.lastElementChild.classList.remove("styling");
    paragraph.classList.remove('styling');
    console.log('clicked on button');
}


// innerText

let test = document.getElementById('para1');
console.log(test);
console.log(test.innerText); // using this we get text only it ignores spaces and empty lines
console.log(test.textContent);// using this we get text with spaces and empty lines
console.log(test.innerHTML); // using this we get text with spaces , empty lines and child-tags what we have used in this element.