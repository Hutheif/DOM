const box = document.getElementsByClassName("box")[0];
const button = document.getElementsByTagName("button")[0];

//button.addEventListener("click", () => {
//  box.style.backgroundColor = "red";
//  box.style.width = "200px";
//  box.style.height = "200px";
//box.style.borderRadius = "50%";
//  box.style.transition = "all 0.5s ease-in-out";
//});
button.onclick = () => {
  box.style.backgroundColor = "red";
  box.style.width = "200px";
  box.style.height = "200px";
  box.style.borderRadius = "50%";
  box.style.transition = "all 0.5s ease-in-out";
};
