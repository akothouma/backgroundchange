 // const button=document.getElementById("btn")
  //button.addEventListener("click",function(){
    //  document.body.style.background=randomColors()
  //})
 
 function randomColors(){
    document.body.style.background= `hsl(${Math.floor(Math.random()*360)},100% ,50%)`
   
}
//function randomColors(){
//return `hsl(${Math.floor(Math.random()*360)},100% ,50%)`
//}
setInterval(randomColors,1000)
 
 
   

