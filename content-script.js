var mybutton = document.getElementById("myBtn"),
	nav =  document.getElementById("head"),
	pic1 = document.getElementById("pic1"),
	pic2 = document.getElementById("pic2"),
	pic3 = document.getElementById("pic3"),
	pic4 = document.getElementById("pic4"),
	pic5 = document.getElementById("pic5"),
	pic6 = document.getElementById("pic6"),
	list = document.getElementById("list"),
	content = document.getElementById("content"),
	arrow = document.getElementById("arrow-content-div");

function scrollFunction() {
	"use strict";
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		mybutton.style.display = "block";
		pic1.style.display = "block";
		nav.style.display = "none";
	} else {
		mybutton.style.display = "none";
		pic1.style.display = "none";
		nav.style.display = "block";
	}
	if (document.body.scrollTop > 1340  || document.documentElement.scrollTop > 1340) {
		pic1.style.display = "none";
	} else {
		pic1.style.display = "block";
	}
	if (document.body.scrollTop > 1100  || document.documentElement.scrollTop > 1100) {
		pic2.style.display = "block";
	} else {
		pic2.style.display = "none";
	}
	if (document.body.scrollTop > 2320 || document.documentElement.scrollTop > 2320) {
		pic2.style.display = "none";
	} else {
		pic2.style.display = "block";
	}
	if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
		pic3.style.display = "block";
	} else {
		pic3.style.display = "none";
	}
	if (document.body.scrollTop > 3720 || document.documentElement.scrollTop > 3720) {
		pic3.style.display = "none";
	} else {
		pic3.style.display = "block";
	}
	if (document.body.scrollTop > 3680 || document.documentElement.scrollTop > 3680) {
		pic4.style.display = "block";
	} else {
		pic4.style.display = "none";
	}
	if (document.body.scrollTop > 4890 || document.documentElement.scrollTop > 4890) {
		pic4.style.display = "none";
	} else {
		pic4.style.display = "block";
	}
	if (document.body.scrollTop > 4760 || document.documentElement.scrollTop > 4760) {
		pic5.style.display = "block";
	} else {
		pic5.style.display = "none";
	}
	if (document.body.scrollTop > 5980 || document.documentElement.scrollTop > 5980) {
		pic5.style.display = "none";
	} else {
		pic5.style.display = "block";
	}
	if (document.body.scrollTop > 5760 || document.documentElement.scrollTop > 5760) {
		pic6.style.display = "block";
	} else {
		pic6.style.display = "none";
	}
	if (document.body.scrollTop > 6970 || document.documentElement.scrollTop > 6970) {
		pic6.style.display = "none";
	} else {
		pic6.style.display = "block";
	}
}
scrollFunction();

window.onscroll = function () {
	"use strict";
	scrollFunction();
};

function topFunction() {
	"use strict";
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
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