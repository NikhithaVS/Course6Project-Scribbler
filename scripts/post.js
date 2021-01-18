var likeBtn = document.getElementById("likeBtn");
var likeText = document.getElementById("likeText");
var likeSubText = document.getElementsByClassName("likeSubText")[0];
var editBtn = document.getElementById("editBtn");
var postTitle = document.getElementById("postTitle");
var postDescription = document.getElementById("postDescription");
var editText = document.getElementsByClassName("editText")[0];
var commentBtn = document.getElementById("commentBtn");
var comment = document.getElementById("comment");
var allComments = document.getElementsByClassName("all-comments")[0];
var fas = document.getElementById("font-icon");
var countLikes = 0;

editBtn.onclick = function () {
  //   console.log("editBtn");

  if (fas.classList.contains("fa-edit")) {
    console.log("fa-edit");
    editText.innerHTML = "Save";
    fas.classList.remove("fa-edit");
    fas.classList.add("fa-save");

    postTitle.contentEditable = "true";
    postTitle.style.border = "2px solid pink";
    postDescription.contentEditable = "true";
    postDescription.style.border = "2px solid pink";
  } else {
    console.log("fa-save");
    editText.innerHTML = "Edit";
    fas.classList.remove("fa-save");
    fas.classList.add("fa-edit");

    postTitle.contentEditable = "false";
    postTitle.style.border = "none";
    postDescription.contentEditable = "false";
    postDescription.style.border = "none";
  }
};

likeBtn.onclick = function () {
  //   console.log("likeBtn ");
  countLikes++;
  likeText.innerHTML = "Liked";
  likeSubText.innerHTML = countLikes + " person likes this!";
};

commentBtn.onclick = function () {
  console.log("commentBtn", comment.value);
  if (comment.value !== "") {

    // create gray div
    const grayDiv = document.createElement("div");
    grayDiv.classList.add("grayDiv");

    // Append Gray div
    allComments.appendChild(grayDiv);

    // create comments Div
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("commentsDiv"); // add class to the element

    // Append commentsDiv to section
    grayDiv.appendChild(commentsDiv);

    // Show comments
    commentsDiv.innerText = comment.value;

    //clear input field
    comment.value = "";

    grayDiv.scrollIntoView({
        behavior: 'smooth'
    });
  }
};
