var img = document.getElementById("image");
var submit = document.getElementById("submit");
var userName = document.getElementsByName("UserName");


submit.addEventListener("click", function () {
    //var fr = new FileReader();
    var formData = new FormData();
    //fr.readAsDataURL(document.getElementById("image").files[0]);
    // fr.addEventListener("load", function () {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.19.35:3000/photo");
    // xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var pb = document.getElementById("pb");
    formData.append("avatar", document.getElementById("image").files[0])
    formData.append("FirstName", document.getElementById("userName").value)
    xhttp.upload.onprogress = function (e) {
        pb.style.width = e.loaded / e.total * 100 + "%"
    };
    // pb.style.width = value +"%";
    xhttp.send(formData);

}, false);

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}