var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var result = document.getElementById("result");


let count = 0;
decrease.addEventListener("click",redColor);
increase.addEventListener("click",greenClr);
function greenClr(){
    if(result.innerHTML >= 0){
        result.style.color = "green"
    }
   
}
function redColor(){
    if(result.innerHTML <= 0){
        result.style.color = "red"
    }
    
}

increase.addEventListener("click",(e) =>{
    if(e.target === increase){
        result.innerHTML = count++;
        }
        
})
decrease.addEventListener("click",(e) =>{
    if(e.target === decrease){
        result.innerHTML = count--;
        
        }
})
reset.addEventListener("click",(e) =>{
    if(e.target === reset){
        result.innerHTML = count = 0;
        result.style.color = "gray"
        
        }
})



