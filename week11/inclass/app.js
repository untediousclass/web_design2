let carousel = document.getElementById("carousel");
        let carouselIMG = document.getElementById("carouselIMG");

        let img1 = "image/quokka1.jpg";
        let img2 = "image/quokka2.png";
        let img3 = "image/quokka3.jpg";

        let images = [
        "image/quokka1.jpg", "image/quokka2.png", "image/quokka3.jpg"
        ]

        let counter = 0;


        let imgChange = function() {
            counter++;
            if(counter === 3) {
                counter = 0;
            }
            carouselIMG.src = image[counter];

            if(carouselIMG.alt === "cute quokka1"){
                carouselIMG.src = images[1];
                carouselIMG.alt = "cute quokka2";
            }
            
            else if(carouselIMG.alt === "cute quokka2"){
                carouselIMG.src = images[2];
                carouselIMG.alt = "cute quokka3";
            }
            
            else if(carouselIMG.alt === "cute quokka3"){
                carouselIMG.src = images[0];
                carouselIMG.alt = "cute quokka1";
            }
            
        }

        let subscribeRequest = function() {
            prompt("Give us your email or else!!!", "my@email.com");
        }

        window.addEventListener("load", function() {
            //setTimeout(subscribeRequest, 4000);
            setInterval(imgChange, 3000);
        });
