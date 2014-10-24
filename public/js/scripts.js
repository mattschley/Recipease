function markActiveLink(el) {   
    alert($(el).attr("id"));
}
function override(e){
  var name = e.getAttribute("id");
  localStorage.setItem('resultid', JSON.stringify(name));
}
function fun(){
	var link_s = document.getElementById('link').value;
	//alert(link_s);
	deletediv();
	call_api(link_s);
}
function food_button(concept){
	//alert(concept);

var link_s = document.getElementById(concept).innerHTML;
	//alert(link_s);
	deletediv();
	call_api(link_s);

}
function call_api(link_s){

var yummlySearch = 'http://api.yummly.com/v1/api/recipes?_app_id=2561983c&_app_key=cd08ea50368dcded18b2e38d40d3e8f8&q='+link_s +'&requirePictures=true&maxResult=30';
count = 0; 
               $.ajax({
                    type: 'GET',
                    url: yummlySearch,
                    dataType: 'jsonp',
                    success: function(json) {
                        console.log(json);
                      
                        for (i = 0; i < 30;i++){
                        //alert(i);
                        var resultid = json['matches'][i].id;

                        // var result0 = 
                        // '<div class="col-lg-2 col-sm-3 col-xs-4 wrapper"><a href= "recipe_results.html" value = "http://api.yummly.com/v1/api/recipe/' + json['matches'][i].id + '?_app_id=2561983c&_app_key=cd08ea50368dcded18b2e38d40d3e8f8"</div>';
  
                        var result1 = 
                         '<div><a href="recipe_results.html" onclick="override(this)" id="'+resultid+'" value = ' + json['matches'][i].id + '</a></div><h3>Recipe Name:  '+ json['matches'][i].recipeName + '<br>';
                           
                        var result2 = 
                        '<h5>rating:  '+ json['matches'][i].rating + '<br>'; 
                        var result3 = 
                        '<img src='+ json['matches'][i].smallImageUrls + '></div><br>';
                        var result =result1 + result2 + result3;
                        //var result = result0;
                        //count += 1;
                        console.log(i);
                        count = count + 1; 
                        if(json['matches'][i].rating == 5 ){
                        $('#badge').append(result);}
                      }

                      sessionStorage.setItem("badge", "John");
                    }

                });

}
function deletediv(){
	var div = document.getElementById('badge');
	while(div.firstChild){
	div.removeChild(div.firstChild);}
}

function keydown(ev){
	if(ev.keyCode == 13){
		fun();
	}

}
 document.onkeydown = function(ev){ keydown(ev) };
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

