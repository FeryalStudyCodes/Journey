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
   // var x = document.getElementsByClassName("city");
   // if (x.style.display === "none") {
   //    x.style.display = "block";
   // }
}