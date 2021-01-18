// Get the modal
var deletePostModal = document.getElementById("deleteModal");

var selectedPost;

// Get the button that opens the modal
var btn = document.getElementsByClassName("deletePost");
console.log(btn);
for(var i = 0; i < btn.length; i++) {
    // When the user clicks the button, open the modal 
    btn[i].onclick = function() {
        selectedPost = this.id;
        deletePostModal.style.display = "block";
    }
}
// Get the element that closes the modal
 var span = document.getElementById("closeDeletePost");

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    deletePostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
}

var onDeleteClick = document.getElementsByClassName("green-btn")[0];

onDeleteClick.onclick = function() {
    var post = document.getElementsByClassName("post");
    post[selectedPost].style.display = "none";
    deletePostModal.style.display = "none";
}