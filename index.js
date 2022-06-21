let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");

        if(counter === 0){
            firstSelection = card.getAttribute("animal");
            counter++;
        } else {
            secondSelection = card.getAttribute("animal");
            counter = 0;
        }

        console.log(firstSelection);
        console.log(secondSelection);
    });
});