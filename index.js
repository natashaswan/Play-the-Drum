// function handleClick() {
//     alert("I got clicked!");
// }

// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(n) { 
//         var n=i;
//         var soundFileName = "sounds/" + "button" + n + ".mp3";
//         console.log(soundFileName);
//         var audio = new Audio(soundFileName);
//         audio.play();
//     })
// }

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;                                   
        makeSound(buttonInnerHTML);
        animatedKeys(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event) {

        makeSound(event.key);
        animatedKeys(event.key);});

function makeSound(key)  {
                                     
        switch (key) {
            case "w":
                var audio = new Audio("sounds/button0.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/button1.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/button2.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/button3.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/button4.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/button5.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/button6.mp3");
                audio.play();
                break;
            default:console.log(key);

        }
    }

    function animatedKeys(key){
        document.querySelector("."+ key).classList.add("pressed");
        setTimeout(function() {document.querySelector("."+key).classList.remove("pressed")}, 200);
    }
 
