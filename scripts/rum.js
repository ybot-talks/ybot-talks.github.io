function drinkRum() {
    var image = document.getElementById("rum");
    var imagesource = image.getAttribute("src");
    if (imagesource == "..\\images\\rum\\4.png") {
    document.getElementById("rumbutton").outerHTML = "";
    var audio = new Audio("..\\audio\\rum.wav");
    audio.play();
}
    else {
        let sources = ["..\\images\\rum\\1.png",
                       "..\\images\\rum\\2.png",
                       "..\\images\\rum\\3.png",
                       "..\\images\\rum\\4.png"
        ];
        var index = sources.indexOf(imagesource);
        index++;
        var newsource = sources[index];
        image.src = newsource;
    }
}
