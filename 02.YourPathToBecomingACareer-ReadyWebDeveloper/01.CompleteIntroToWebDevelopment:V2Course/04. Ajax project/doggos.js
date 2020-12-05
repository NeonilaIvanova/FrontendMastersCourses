const DOG_URL = "https://dog.ceo/api/breeds/image/random";
//const BREEDS = "https://dog.ceo/api/breeds/list/all"

const doggos = document.querySelector(".doggos");
//const breeds = document.querySelector(".breeds");

/* function selectBreed() {
    const promise = fetch(BREEDS);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            processedResponse.Each((breed => {
                console.log(breed);
                const option = document.createElement("option");
                option.value = processedResponse.message;
                option.innerText = processedResponse.message;
            }))
        });
} */

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.prepend(img);
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
selectBreed();