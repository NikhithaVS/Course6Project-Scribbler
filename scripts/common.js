// Sign Up Modal
// Get the modal
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn = document.getElementById("signUp");
// console.log("btn", btn)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSignUp")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
   signUpModal.style.display = "block";
  //  console.log("hello");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}

// Sign In Modal
// Get the modal
var signInModal = document.getElementById("signInModal");

// Get the button that opens the modal
var btn = document.getElementById("signIn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSignIn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    signInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    signInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}

// sign In modal -> sign up
var openSignUp = document.getElementById("openSignUp");
openSignUp.onclick = function(){
  console.log("hello openSignUp");
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}