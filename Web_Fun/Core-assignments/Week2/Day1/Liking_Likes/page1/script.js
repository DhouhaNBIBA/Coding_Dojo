var count= 3;
var countElement=document.querySelector(".add");

function add(){
    count++;
    countElement.innerText= count +" "+"Like(s)";
}