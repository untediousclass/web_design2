let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images = [
  "image/placeholder.png", "image/placeholder.png", "image/placeholder.png"
]

let counter = 0;

let nikeSubcats = ["shoes", "clothes", "accessories"];
let adidSubcats = ["shoes", "clothes", "accessories"];

let categoryUpdate = function () {


  subSelect.innerHTML = "";

  if (catSelect.value === "nike") {

    nikeSubcats.forEach(function (elem) {
      let opt = document.createElement("option");
      opt.value = elem;
      opt.innerText = elem;
      subSelect.appendChild(opt);
    })
  }
  else if (catSelect.value === "adid") {

    adidSubcats.forEach(function (elem) {
      let opt = document.createElement("option");
      opt.value = elem;
      opt.innerText = elem;
      subSelect.appendChild(opt);
    })
  }

}

catSelect.addEventListener("change", categoryUpdate);


let imgChange = function () {
  counter++;
  if (counter === 3) {
    counter = 0;
  }
  carouselIMG.src = images[counter];
}

let subcatUpdate = function () {
  let catValue = catSelect.value;
  let subcatValue = subSelect.value;
  if (catValue == 'nike' && subcatValue == nikeSubcats[0]) {
    images = [
      "image/ns1.png", "image/ns2.png", "image/ns3.png"
    ]
  }
  else if (catValue == 'nike' && subcatValue == nikeSubcats[1]) {
    images = [
      "image/nc1.png", "image/nc2.png", "image/nc3.png"
    ]
  }
  else if (catValue == 'nike' && subcatValue == nikeSubcats[2]){
    images = [
      "image/na1.png", "image/na2.png", "image/na3.png"
    ]
  }
  if (catValue == 'adid' && subcatValue == adidSubcats[0]) {
    images = [
      "image/as1.png", "image/as2.png", "image/as3.png"
    ]
  }
  else if (catValue == 'adid' &&subcatValue == adidSubcats[1]) {
    images = [
      "image/ac1.png", "image/ac2.png", "image/ac3.png"
    ]
  }
  else if (catValue == 'adid' && subcatValue == adidSubcats[2]){
    images = [
      "image/aa1.png", "image/aa2.png", "image/aa3.png"
    ]
  }

}

subSelect.addEventListener("change", subcatUpdate);

window.addEventListener("load", function () {
  setInterval(imgChange, 1000);
})