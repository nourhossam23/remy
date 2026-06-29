
const bigContainer = document.querySelector(".big-container")
const p = document.getElementById("pp");

const button2 = document.querySelectorAll(".submit");

// console.log(button);
// const button2 = document.getElementById("button");
// button2.style.backgroundColor = "pink";
// const buy = document.getElementById("buy");


// buy button
const buttons = document.querySelectorAll(".bn-tprimary");
console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "pink";

    // button.addEventListener("click",

    //     (eo) => {
    //         //    bigContainer.style.display ="block";
    //         eo.preventDefault();
    //         bigContainer.classList.add("active")
    //         pp.style.display = "none";

    //     }

    // )

});




// buy.addEventListener("click",

//     (eo) => {
//         //    bigContainer.style.display ="block";
//         eo.preventDefault();
//         bigContainer.classList.add("active")
//         pp.style.display = "none";


//     }
// )

//submit button



button2.forEach(item => {
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



//dark mode 
const body = document.getElementById("body");
const mode = document.getElementById("mode");
mode.addEventListener("click", (eo) => {
    document.body.classList.toggle("dark");


})


//when i click on buy button

const add = document.getElementById("add");
add.style.backgroundColor = "pink";

const procontainert = document.querySelector("#bigdiv")

add.addEventListener("click", (eo) => {
    const newproduct = `
                <div class="card" style="width: 18rem;">
                <img src="pexels-farcom-32396008.jpg" class="card-img-top" style="width:18rem;" style="border-radius:5px;">
                <div class="card-body">
                <h5 class="card-title">White Cherry Blossom</h5>
                <p class="card-text">Fresh white cherry blossoms with a delicate fragrance, perfect for weddings, celebrations, and elegant floral arrangements.</p>
                <a href="#" id="buy" style="background-color:pink;" class="btn bn-tprimary">buy</a>
                </div>
    </div>
    `
    procontainert.innerHTML += newproduct

})


procontainert.addEventListener("click",
    (eo) => {
        if (eo.target.className == "btn bn-tprimary") {
            eo.preventDefault();
            bigContainer.classList.add("active")
            pp.style.display = "none";


        }

    }


)