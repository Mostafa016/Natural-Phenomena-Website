var slideIndex = 1,
	mybutton = document.getElementById("myBtn"),
	list = document.getElementById("list"),
	content = document.getElementById("content"),
	nav =  document.getElementById("head"),
	arrow = document.getElementById("arrow-content-div");

		//---------------------------Slide Show------------------------------------//

var prev = slideIndex;
function showSlides(n) {
	"use strict";
	var i,
		slides = document.getElementsByClassName("mySlides"),
		dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
		
	for (i = 0; i < slides.length; i += 1) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i += 1) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);

function plusSlides(n) {
	"use strict";
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	"use strict";
	showSlides(slideIndex = n);
}

//__________________________________________________________________________________________//



							//---------- Content list ------------//

function activation() {
	"use strict";
	content.style.backgroundColor = "rgba(0,0,0,0.88)";
	content.style.transform = "scale(1.1)";
	list.style.display = "block";
	arrow.style.display = "none";
}
function hiding() {
	"use strict";
	list.style.display = "none";
	content.style.transform = "scale(1)";
	content.style.backgroundColor = "rgba(0,0,0,0.44)";
	arrow.style.display = "inline-block";
}


//------------------------------------------------------------------------------------------//


				//---------- Displaying elements by scrolling ------------//

function scrollFunction() {
	"use strict";
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		nav.style.display = "none";
		mybutton.style.display = "block";
	} else {
		nav.style.display = "block";
		mybutton.style.display = "none";
	}
}
scrollFunction();

window.onscroll = function () {
	"use strict";
	scrollFunction();
};

//------------------------------------------------------------------------------------------//


							//---------- Go top button ------------//

function topFunction() {
	"use strict";
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
      //-------------------------- Check for user type ----------------//
window.onload = function checkUserType(){

  var userType = localStorage.getItem("typeOfUser");
  var adminButton = document.getElementById("admin");
  if(userType == "admin"){
    adminButton.style.display = "inline-block";
  }
  else if(userType == "user"){
    adminButton.style.display = "none";
  }
  
}