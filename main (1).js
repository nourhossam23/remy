
// const button = document.getElementById("buy");
// console.log(button);

// button.style.backgroundColor = "pink";

// const button2 = document.getElementById("button");


// button2.style.backgroundColor = "pink";
const buttons = document.querySelectorAll(".bn-tprimary");
console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "pink";
    
button.addEventListener("click",

    (eo) => {
        //    bigContainer.style.display ="block";
        eo.preventDefault();
        bigContainer.classList.add("active")
        pp.style.display = "none";


    }
    
)

});

const bigContainer = document.querySelector(".big-container")


// const buy = document.getElementById("buy");

const p = document.getElementById("pp");

// buy.addEventListener("click",

//     (eo) => {
//         //    bigContainer.style.display ="block";
//         eo.preventDefault();
//         bigContainer.classList.add("active")
//         pp.style.display = "none";


//     }
// )


const button2 = document.querySelectorAll(".submit");



button2.forEach(item =>{
    item.style.backgroundColor = "pink";

item.addEventListener("click", (eo) => {
    // bigContainer.style.display = "none";
    pp.style.display = "block";
    setTimeout(() => {
        pp.style.display = "none";
        bigContainer.classList.remove("active")
    }, 2000);
})


})


// button2.addEventListener("click", (eo) => {
//     // bigContainer.style.display = "none";
//     pp.style.display = "block";
//     setTimeout(() => {
//         pp.style.display = "none";
//         bigContainer.classList.remove("active")
//     }, 2000);
// })

const body = document.getElementById("body");
const mode = document.getElementById("mode");
mode.addEventListener("click", (eo) => {
    document.body.classList.toggle("dark");


})