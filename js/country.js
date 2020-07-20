var countries = {
        Yemen:['Sana\'a', 'Ibb', 'Socatra'],
        Egypt:['Cairo', 'Jeza', 'Alexandria']
}

var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

main.addEventListener('change', function(){
   var selected_option = countries[this.value];

   while(sub.options.length > 0){
       sub.options.remove(0);
   }

   Array.from(selected_option).forEach(function(el){
      let option = new Option(el, el);

      sub.appendChild(option);
   });
});