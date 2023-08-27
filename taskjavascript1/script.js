var Products = document.querySelectorAll(" #item");
var content = document.querySelector("#content");
var btn = document.querySelector("#btn");
var totalprice = 0 ;

Products.forEach(function (item ) {
    item.onclick =function(){
        
        totalprice += parseInt(mlml.getAttribute("price"));
        content.innerHTML += kij.textContent +"  &&  ";
        item.style.backgroundColor ="brown";
        item.style.color="white";


     if (content.innerHTML != "") {
        lolo.style.display = "block" ;
     }  
    }
})

btn.onclick =function () {
    document.getElementById("bb").innerHTML= totalprice ;
}