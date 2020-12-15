let field = document.getElementById("colorField");
let colorBTN = document.getElementById("colorToggle");

let toggleIMG = document.getElementById("quokkaIMG");
let imageBTN = document.getElementById("imgToggle");

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let imageToggle = function() {
    if(toggleIMG.alt === "cute quokka1") {
        console.log('fire');
        toggleIMG.src = "image/quokka2.png";
        toggleIMG.alt = "cute quokka2";
    }
    else {
        toggleIMG.src = "image/quokka1.jpg";
        toggleIMG.alt = "cute quokka1";
    }
}

//imageToggle();

imageBTN.addEventListener("click", imageToggle);

colorBTN.addEventListener("click", function () {

    let rComp = Math.random()*255;
    let gComp = Math.random()*255;
    let bComp = Math.random()*255;

    //"rgb(18, 187, 56)"
    field.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")";
})

let categoryUpdate = function () {
    let foodSubcats = ["coffee", "desserts", "cocktails", "muffins"];
    let animSubcats = ["kittens", "puppies", "quokkas"];
    let natureSubcats = ["forests", "mountains", "lakes"];

    subSelect.innerHTML = "";

    if(catSelect.value === "food") {
        console.log("food");
        foodSubcats.forEach(function (elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if (catSelect.value === "anim") {
        console.log("animal");
        animSubcats.forEach(function (elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "nat"){
        console.log("nature");
        natureSubcats.forEach(function (elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}

catSelect.addEventListener("change", categoryUpdate);







