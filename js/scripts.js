$(document).ready(function() {
  $("form#celebrity-date").submit(function(event) {
   var age = parseInt($("input#age").val());
   var pet = $("select#pet").val();

   if (age < 30 && pet ==="cat") {
     $('#surya').hide();
     $('#vijay').show();
     $('#nayan').hide();
     $('#trisha').hide();
   } else if (age === 30 && pet==="cat"){
     $('#surya').show();
     $('#vijay').hide();
     $('#nayan').hide();
     $('#trisha').hide();
   } else if (age > 30 && pet==="cat"){
     $('#surya').show();
     $('#vijay').hide();
     $('#nayan').hide();
     $('#trisha').hide();
   } else if (age < 30 && pet==="dog"){
     $('#nayan').show();
     $('#surya').hide();
     $('#vijay').hide();
     $('#trisha').hide();
   } else if (age === 30 && pet==="dog"){
     $('#nayan').show();
     $('#surya').hide();
     $('#vijay').hide();
     $('#trisha').hide();
   } else if (age > 30 && pet==="dog"){
     $('#trisha').show();
     $('#surya').hide();
     $('#vijay').hide();
     $('#nayan').hide();
   }

   event.preventDefault();
 });
});
