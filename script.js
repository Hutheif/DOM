//interface
//web documents
//interact with html

//2. access elements through dom
//querryselectorall
//getelemetbyId
//getelementsbyClassName

//3.manipulate the content
//textcontent
//innerhtml
//innertext

//4.manipulate the structure

//5. manipulate the style of elements

//6.dealing with events

const naVLinks = [
  {
    href: "index.html",
    text: "Home",
  },
  {
    href: "about.html",
    text: "About",
  },
  {
    href: "contact.html",
    text: "Contact",
  },
  {
    href: "articles.html",
    text: "articles",
  },
];

//function functionName(){}
//const function = () =>{} // arrow function syntax

//use each element of the array to create a link 'li element'
//attach the group of li elements to the html structure
//using innerHTML or appendChild

const navLinksContainer = document.getElementById("nav-links");
naVLinks.forEach((link) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
  navLinksContainer.appendChild(li);
});

let links = "";
naVLinks.forEach((link) => {
  links += `<li><a href="${link.href}">${link.text}</a></li>`;
});

//using dom methods
naVLinks.forEach((link) => {
  // create a new li element
  // create a new anchor element
});
