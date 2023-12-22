let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");
let menuBar = document.querySelector("#menu-bar");


menuBar.onclick = () =>{
  menuBar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menuBar.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    header.classList.add('active');
   }else{
    header.classList.remove('active');
   }
}