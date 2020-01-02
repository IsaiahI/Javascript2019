function refresher(){
  var name = document.getElementById("name").value;
  if(name.length < 5 || name.length > 25){
    alert("enter a valid name");
  }
}
