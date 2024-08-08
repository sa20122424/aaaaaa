

const mybox = document.getElementById("box");
const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", event => {
    mybox.style.backgroundColor = "red";
    mybox.textContent = "OUCH! 😡";

}

)
myBtn.addEventListener("mouseover", event => {

    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "clic me ???";
    
    

})
myBtn.addEventListener("mouseleave", event => {

    mybox.style.backgroundColor = "green";
    mybox.textContent = "click me  😄";
    

})







mybox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.targe.textContent = "OUCH! 😡";

}

)
mybox.addEventListener("mouseover", event => {

    event.targe.style.backgroundColor = "yellow";
    event.targe.textContent = "clic me ???";
    
    

})
mybox.addEventListener("mouseleave", event => {

    event.targe.style.backgroundColor = "green";
    event.targe.textContent = "click me  😄";
    

})











