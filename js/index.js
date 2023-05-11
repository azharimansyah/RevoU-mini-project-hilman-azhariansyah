const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".navbar .menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const email = document.forms["message-form"]["email"].value;
  const nohp = document.forms["message-form"]["nohp"].value;

  if (name == "" || email == "" || nohp == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }
}
