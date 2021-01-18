
// Create Post Modal
// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var btn = document.getElementById("createPost");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeCreatePost")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
}