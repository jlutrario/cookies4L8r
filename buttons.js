function cleartextbox() {
  var textbox = document.getElementsByTagName("textarea")[0];
  textbox.value = "";
  textbox.focus();
};

function save() {
  var textbox = document.getElementsByTagName("textarea")[0];
  document.cookie = "message=" + textbox.value;
  cleartextbox();
  var h3 = document.getElementById("text");
  if (h3.style.display == "block") {
    show();
  }
}

function show() {
  var h3 = document.getElementById("text");
  h3.innerText = document.cookie.substring(8);
  h3.style.display = "block";
  var hideBtn = document.getElementById("hideBtn");
  hideBtn.style.display = "block";
}

function hide() {
  var hideBtn = document.getElementById("hideBtn");
  var h3 = document.getElementById("text");
  hideBtn.style.display = "none";
  h3.style.display = "none";
}