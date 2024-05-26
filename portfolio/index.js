function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
 


var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11"];

for (var i = 0; i < slideIndex.length; i++) {
  showDivs(1, i);
}
function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1; }
  if (n < 1) { slideIndex[no] = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no] - 1].style.display = "block";  
}




function validate() { 
  let name = 
      document.getElementById("name").value; 
  let subject = 
      document.getElementById("subject").value; 
  let phone = 
      document.getElementById("phone").value; 
  let email = 
      document.getElementById("email").value; 
  let message = 
      document.getElementById("message").value; 
  let error_message = 
      document.getElementById("error_message"); 

  error_message.style.padding = "10px"; 

  let errors = []; 

  if (name.length < 5) { 
      errors.push("Please Enter a valid Name");} 
  if (subject.length < 10) { 
      errors.push("Please Enter a Correct Subject");} 
  if (isNaN(phone) || phone.length != 10) { 
      errors.push("Please Enter a valid Phone Number");} 
  if (email.indexOf("@") == -1 || email.length < 6) { 
      errors.push( 
          "Please Enter a valid Email");} 
  if (message.length <= 50) { 
      errors.push( 
          "Please Enter More Than 40 Characters");} 

  if (errors.length > 0) { 
      error_message.innerHTML = 
          errors.join("<br>"); 
      return false;} 
  else { 
      alert( 
          "Form Submitted Successfully!"); 
      return true;}}
      

