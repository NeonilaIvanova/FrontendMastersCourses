//const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector('.breeds');
const spinner = document.querySelector('.spinner');
const img = document.querySelector('.dog-img');
//const addDoggoButton = document.querySelector(".add-doggo");

function createSelect () {
    fetch(BREEDS_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        breedsArray.forEach(function (breed) {
            const option = document.createElement('option');
            option.value = breed;
            option.innerText = breed;
            select.appendChild(option);
        })
    })
}

function createURL (event) {
    if (event.target.value === "default ") {
        return;
    } else {
    const chosenBreed = event.target.value;
    let urlForChosenBreed = `https://dog.ceo/api/breed/${chosenBreed}/images/random`;
    addDoggoByBreed(urlForChosenBreed);
    }       
}

/* function addDoggo () {
    fetch(DOG_URL)
    .then(function(response) {
        return response.json();
    })
    .then (function(data) {
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Cute dogo';
        
        document.querySelector('.doggos').prepend(img);
    })    
} */

function addDoggoByBreed (urlForChosenBreed) {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(urlForChosenBreed)
    .then(function(response) {
        return response.json();
    })
    .then (function(data){
        img.src = data.message;
        console.log(img.src);
        img.alt = 'Cute dogo';
        document.querySelector('.doggo').appendChild(img);
    })
}

img.addEventListener("load", function () {
    spinner.classList.remove('show');
    img.classList.add("show");
})

function init () {
    // addDoggoButton.addEventListener("click", addDoggo);
    select.addEventListener("change", createURL);
    createSelect();

}

init();