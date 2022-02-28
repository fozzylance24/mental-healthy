// menu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    
  }


// scroll to top
  mybutton = document.getElementById("Btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
// tab section
  let trophy = document.getElementById("trophy");
  let smile = document.getElementById("smile");
  let dollar = document.getElementById("dollar");
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");

  function openTrophy(){
    trophy.style.transform = "translateX(0)";
    smile.style.transform = "translateX(100%)";
    dollar.style.transform = "translateX(100%)";
    btn1.style.color = "#0493A3";
    btn2.style.color = "#AFAFB1";
    btn3.style.color = "#AFAFB1";
  
    
}
function openSmile(){
  trophy.style.transform = "translateX(100%)";
  smile.style.transform = "translateX(0%)";
  dollar.style.transform = "translateX(100%)";
  btn1.style.color = "#AFAFB1";
  btn2.style.color = "#0493A3";
  btn3.style.color = "#AFAFB1";

  
}
function openDollar(){
  trophy.style.transform = "translateX(100%)";
  smile.style.transform = "translateX(100%)";
  dollar.style.transform = "translateX(0%)";
  btn1.style.color = "#AFAFB1";
  btn2.style.color = "#AFAFB1";
  btn3.style.color = "#0493A3";
  
}


