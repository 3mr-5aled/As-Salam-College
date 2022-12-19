// tab feature

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Scroll-to-Top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// read more

function readfunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readbutton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//  Counter

// let values = document.querySelectorAll(".value");
// let section = document.querySelector("#statistics")
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop - 100) {
//     if (!started) {
//       values.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
// animatio
//  get all element in portofolio element
var right=document.getElementsByClassName("right")
var left=document.getElementsByClassName("left")
// alone is last divv in portofolio elem 
var alone=document.getElementsByClassName("alone")

window.onload=function () {
  setTimeout(function () {
    for (let i = 0; i < right.length; i++) {
      right[i].classList.add("active-right")
      left[i].classList.add("active-left")
      alone[0].style.bottom="0"
      
    }

  },1)
}


// end animatio
// start
var li=Array.from (document.querySelector(".list-unstyled").children)
var port=document.getElementsByClassName("box")
li.forEach(function (ele) {
  ele.addEventListener("click",function () {
    for (let  i= 0;  i< li.length;i ++) {
      li[i].classList.remove("ilter")
    }
    for (let i = 0; i < port.length; i++) {
      if(ele.innerHTML != "All"){
    
      port[i].style.display="none"
      if (port[i].getAttribute("data-filter")==ele.innerHTML) {
        port[i].style.display="block"
        ele.classList.add("ilter")

      }
      
    }else{
      port[i].style.display="block"

    }
    }})

  })    
