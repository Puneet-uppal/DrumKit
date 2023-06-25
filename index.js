var size=document.querySelectorAll("button").length;
for(var i=0;i<size;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    white(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(event){
    white(event.key);
    buttonAnimation(event.key);
});
function white(key){
        switch(key){
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;     
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "j":
                var kick=new Audio("sounds/tom-2.mp3");
                kick.play();
                break;
            case "l":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            defualt:console.log(key);
        }               
        }
        function buttonAnimation(currentkey){
            var activeButton=document.querySelector("."+currentkey);
            activeButton.classList.add("pressed");
            setTimeout(function(){
                activeButton.classList.remove("pressed");
            },100);
        }

