function myFunction() {
  var x = document.getElementById("myLinks2");
  if (x.className === "topnav2") {
    x.className += " responsive";
  } else {
    x.className = "topnav2";
  }
}