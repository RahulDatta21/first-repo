
//LECTURE 7 EVENTS

//instead of using events in the html file, we use the events here
//node.event=() =>{"whatever is to be done, is done here"}

let divBox=document.querySelector("div")
console.log(divBox)
divBox.onmouseover=()=>{
    console.log("you are inside div box")
}

/*event listeners-they are another type of handling events, other than inline handling
and JS handling
node.addEventListener(event, callback) => event such as onclick, ondblclick, etc
callback is a function that is a handler of the event */
 
let btn1=document.querySelector("#btn1")
console.log(btn1)
btn1.addEventListener("click", () => {
    console.log ("button-click me! was clicked")
})

let modeBtn=document.querySelector("#modeChanger")
let currMode="light"
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor="black";
    } 
    else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor="aqua"
    }
    console.log(currMode)
})



