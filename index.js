let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i <numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        
    
        default: console.log(buttonInnerHTML);
            
    }
});
}

// switch statement for executes blocking of coding in different cases
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// or This simple way to write your button javascript
// document.querySelectorAll("button")[0].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[1].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[2].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[3].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[4].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[5].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[6].addEventListener("click", function () {
//     alert("I got clicked!")
// });
// document.querySelectorAll("button")[7].addEventListener("click", function () {
//     alert("I got clicked!")
// });

