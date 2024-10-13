var initial =document.querySelector("p")

var addfriend =document.querySelector("#add")
var check =0

add.addEventListener("click" , function(){
if (check==0){
    initial.innerText="Friend"
    initial.style.color="green"
    addfriend.innerText="friend"
    addfriend.style.background="green"
    check=1}
    else{
    initial.innerText="Stranger"
    initial.style.color="red"
       addfriend.innerText="Add friend"
       addfriend.style.background="red"
    check=0
    }
})



