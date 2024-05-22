//modal --------------------------------------------------------------------
let myButton = document.querySelector("#myBtn");
let backdrop = document.querySelector("#myModal");

let modalClose = document.querySelector(".close");

myButton.addEventListener("click", openModal);

modalClose.addEventListener("click", closeModal);

function openModal() {
    backdrop.style.display = "block";
}
function closeModal() {
    backdrop.style.display = "none";
}


document.addEventListener("click", function(element){
    if(element.target === backdrop) {
        //backdrop.style.display = "none";
        closeModal();
    }
})
document.addEventListener("keydown", function (key){
    if(key.key === "Escape") {
        closeModal()
    }
})
//galerie------------------------------------------------------------------------
let position = 1;
let pictures = document.getElementsByClassName("DOM-img");
function nextImage() {
    if(position < pictures.length-1) {
        position++;
        pictures[position].classList.add("gallery-img");
        pictures[position-1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/image_"+ position +".jpg";
    }
    else {
        position = 1;
        pictures[1].classList.add("gallery-img");
        pictures[pictures.length-1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/image_1.jpg";
    }
}

function prevImage() {
    if(position === 1) {
        position = pictures.length-1;
        pictures[1].classList.remove("gallery-img");
        pictures[pictures.length-1].classList.add("gallery-img");
        pictures[0].src = "assets/images/image_"+ (pictures.length - 1) +".jpg";
    }
    else {
        position--;
        pictures[position].classList.add("gallery-img");
        pictures[position+1].classList.remove("gallery-img");
        pictures[0].src = "assets/images/image_"+ position +".jpg";
    }
}
//Carousel--------------------------------------------------------------------
let persons = [
    {
        name: "-Alex",
        image: "assets/images/profile/person_1.jpg",
        quote: "Pepper Bot provided exceptional mobile repair service for my phone. The staff was knowledgeable, efficient, and friendly. I was impressed by their professionalism and quick turnaround time. Thank you for the great job, Pepper Bot!"
    },
    {
        name: "-Liam",
        image: "assets/images/profile/person_2.jpg",
        quote: "Pepper Bot provided exceptional mobile repair service! The team was efficient, professional, and fixed my phone quickly. I'm grateful for their expertise and friendly customer service. Highly recommend Pepper Bot for all your mobile repair needs. Thank you!"
    },
    {
        name: "-Oliver",
        image: "assets/images/profile/person_3.jpg",
        quote: "Pepper Bot did an amazing job fixing my mobile phone! Their expertise and efficiency were outstanding. The staff was friendly and provided great customer service. I highly recommend Pepper Bot for any mobile repair needs. Thank you so much!"
    }
];

let positionCarousel = 0;
let Jmeno = document.getElementById("person-name");
let Popis = document.getElementById("person-quote");
let obrazek = document.getElementById("person-image");
function nextPerson() {
    if (positionCarousel < persons.length -1){
        console.log(obrazek);
        positionCarousel++;
        Jmeno.innerText = persons[positionCarousel].name;
        Popis.innerText = persons[positionCarousel].quote;
        obrazek.src = persons[positionCarousel].image;
    }
    else {
        positionCarousel = 0;
        Jmeno.innerText = persons[positionCarousel].name;
        Popis.innerText = persons[positionCarousel].quote;
        obrazek.src = persons[positionCarousel].image;
    }
}
function prevPerson() {
    if (positionCarousel === 0){
        positionCarousel = persons.length -1;
        Jmeno.innerText = persons[positionCarousel].name;
        Popis.innerText = persons[positionCarousel].quote;
        obrazek.src = persons[positionCarousel].image;
    }
    else {
        positionCarousel--;
        Jmeno.innerText = persons[positionCarousel].name;
        Popis.innerText = persons[positionCarousel].quote;
        obrazek.src = persons[positionCarousel].image;
    }
}

//modal
let test = document.querySelector(".btn.test");//vrátí první hledaný element, který má shodu
//použití dekrarované funkce, což znamená že funkce má definované tělo v souboru a dá se opakovaně volat

function helloWorld() {
    console.log("ahoj světe");
}




//kdekoliv kliknu na webu, tak se zavolá anonymní funkce
document.addEventListener("click", function (element) {
    //zjištění kliknutého elementu
    if(element.target === obrazek) {
        console.log("kliknul jsi na obrázek");
    }
    else {
        console.log(element.target);
    }
})