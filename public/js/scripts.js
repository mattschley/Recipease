function markActiveLink(el) {   
    alert($(el).attr("id"));
}
function override(e){
  var name = e.getAttribute("id");
  localStorage.setItem('resultid', JSON.stringify(name));
}
// var foods = [];
// function loadArray(){
//   $(document).ready(function() {
//     $('#selecctall').click(function(event) {  //on click 
//         if(this.checked) { // check select status
//             $('.checkbox1').each(function() { //loop through each checkbox
//                 this.checked = true;  //select all checkboxes with class "checkbox1"               
//             });
//         }else{
//             $('.checkbox1').each(function() { //loop through each checkbox
//                 this.checked = false; //deselect all checkboxes with class "checkbox1"                       
//             });         
//         }
//     });
    
// });
// }

// function isBoxChecked(){
//   if(document.getElementById("ingredient1").checked = true){
//     foods.push(this.value);
//   }
// }
// var newsrc = "images/check.jpg";
// function change(el){
//       var x = document.getElementById("broccoli");
//       var foo = ($(el).attr("id"));
//       var bar = ""+foo+"";
//       alert(foo);
//       var original_image = "images/"+ foo +".jpg";
//       alert(original_image); 
//       //console.log(x); <- object
//       if (newsrc == original_image ) {
//         document.images[bar].src = original_image;
//         newsrc  = "images/check.jpg";
//       }
//       else {
//         document.images[bar].src = "images/check.jpg";
//         newsrc  = original_image;
//       }
// }

