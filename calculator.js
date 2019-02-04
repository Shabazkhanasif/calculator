let btn=document.querySelectorAll(".btn");
let equal=document.querySelector(".btn-equal");
let clear=document.querySelector(".btn-clear");
let screen=document.querySelector(".screen");

for(let i=0;i<btn.length;i++){
   btn[i].addEventListener("click",display);
   function display(){
     let number=btn[i].getAttribute("data-num");
    
     	screen.value +=number;
     }
   
   }
equal.addEventListener("click",function(){
if(screen.value !=""){
	let value=eval(screen.value);
	screen.value=value;
			}
});
clear.addEventListener("click",function(){

    screen.value="";
});

