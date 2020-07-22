var countries = {
   Yemen: ['Sana\'a', 'Ibb', 'Socatra'],
   Egypt: ['Cairo', 'Jeza', 'Alexandria']
}

var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

main.addEventListener('change', function () {
   var selected_option = countries[this.value];

   while (sub.options.length > 0) {
      sub.options.remove(0);
   }

   Array.from(selected_option).forEach(function (el) {
      let option = new Option(el, el);

      sub.appendChild(option);
   });
});

function jsDropDown(img_size, folder, img_content, img_id) {
   //document.getElementById(img_id).src = folder + "/" + img_content + ".jpg";

   var cities = document.getElementsByClassName('city');
   var selected_city = sub.value;
   imgs = document.getElementsByClassName('img-city');
   // if (cities == "Ibb") {
   //    document.getElementById(img_id).src = folder + "/" + img_content + "1"  +".jpg"; 
   // }
   var string = "";
   if (selected_city == "Ibb") {
      console.info("Ibb");
      string = "ibb";
   } else if (selected_city == "Sana\'a") {
      console.info("Sana\'a");
      string = "sana\'a";
   } else if (selected_city == "Socatra") {
      string = "socatra";
   } else if (selected_city == "Cairo") {
      string = "cairo";
   } else if (selected_city == "Jeza") {
      string = "jeza";
   } else if (selected_city == "Alexandria") {
      string = "alexandria";
   } else {
      string = "";
   }
   for (i = 1; i < imgs.length + 1; i++) {
      document.getElementById(img_id + i).src = "img" + "/" + string + i + ".jpg";
   }
}

var myNav = document.getElementById("nav");

window.onscroll = function () {
   "use strict";
   if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
      myNav.classList.add("scroll");
   } else {
      myNav.classList.remove("scroll");
   }
};

function printError(elemId, hintMsg) {
   document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

   var name = document.forms["contactform"]["name"].value;
   var emailID = document.forms["contactform"]["email"].value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   var password = document.forms["contactform"]["password"].value;
   var re_password = document.forms["contactform"]["confirm_psw"].value;
   var website = document.forms["contactform"]["website"].value;
   var res = ValidURL(website);

   var msg1 = document.getElementById("message1");
   var msg2 = document.getElementById("message2");
   var msg3 = document.getElementById("message3");
   var msg4 = document.getElementById("message4");
   var msg5 = document.getElementById("message5");

   if (name == null || name == "") {
      msg1.classList.add("alert-danger");
      msg1.innerHTML = "<span>Name field is required! </span>";
      document.forms["contactform"]["name"].focus();
      return false;
   } else {
      msg1.classList.remove("alert-danger");
      msg1.innerHTML = "";
   }

   if (atpos < 1 || (dotpos - atpos < 2)) {
      msg2.classList.add("alert-danger");
      msg2.innerHTML = "<span>Email field is required!</span>";
      document.forms["contactform"]["email"].focus();
      return false;
   } else {
      msg2.classList.remove("alert-danger");
      msg2.innerHTML = "";
   }

   if (password == null || password == "") {
      // alert("Password must be filled out");
      msg3.classList.add("alert-danger");
      msg3.innerHTML = "<span>Password field is required!</span>";
      return false;
   } else {
      msg3.classList.remove("alert-danger");
      msg3.innerHTML = "";
   }
   if (re_password == null || re_password == "") {
      // alert("confirm password must be filled out!");
      msg4.classList.add("alert-danger");
      msg4.innerHTML = "<span>Confirm Password field is required!</span>";
      return false;
   } else {
      msg4.classList.remove("alert-danger");
      msg4.innerHTML = "";
   }
   if (password == re_password) {
      // msg4.classList.remove("alert-danger");
      // msg4.innerHTML = "";
      return true;
   } else if (password != re_password) {
      // alert("password must be same!");
      msg4.classList.add("alert-danger");
      msg4.innerHTML = "<span>Password not matched!</span>";
      return false;
   } else {
      msg4.classList.remove("alert-danger");
      msg4.innerHTML = "";
   }

   if (website == " ") {
      msg5.classList.add("alert-danger");
      msg5.innerHTML = "<span>Url is required</span>";
      return false;
   }
   // else if (!res) {
   //    document.getElementById("message5").innerHTML = "Enter a valid url";
   //    //alert(isValid);
   // }
}

function ValidURL(link) {
   var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
   if (!regex.test(link)) {
      document.getElementById("message5").innerHTML = "Enter a valid url";
      return false;
   } else {
      return true;
   }
}