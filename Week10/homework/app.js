
let shoeBTN1 = document.getElementById("shoe1");
let shoeBTN2 = document.getElementById("shoe2");
let shoeBTN3 = document.getElementById("shoe3");
let shoeBTN4 = document.getElementById("shoe4");
let toggleIMG = document.getElementById("shoeIMG");

let shoeToggle1 = function() {
    if(shoeBTN1.alt = "nike AF1") {
        toggleIMG.src = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/gsuin11ptg5qgktmzoat/air-force-1-07-mens-shoe-JkTGzADv.jpg";
    }

}

let shoeToggle2 = function() {

     if(shoeBTN2.alt = "nike airmax 90") {
        toggleIMG.src = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/81aabc82-c2c1-4986-b698-1de2316b5fb7/air-max-90-mens-shoe-xSPlJ1.jpg";
        }
}


let shoeToggle3 = function() {

    if(shoeBTN3.alt = "nike airmax 95") {
       toggleIMG.src ="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f2004ec7-087a-4970-a1dd-11690b4634db/air-max-95-mens-shoe-5XBQXd.jpg";
       }
}


let shoeToggle4 = function() {

    if(shoeBTN4.alt = "nike airmax 97") {
       toggleIMG.src = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/549db767-ad52-4320-ba7f-f634c9c9e4e0/air-max-97-se-mens-shoe-6DPq65.jpg";
       }
}

shoeBTN1.addEventListener("click", shoeToggle1);
shoeBTN2.addEventListener("click", shoeToggle2);
shoeBTN3.addEventListener("click", shoeToggle3);
shoeBTN4.addEventListener("click", shoeToggle4);


