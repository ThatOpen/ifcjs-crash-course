const tasks = [
    "Meeting with BIM team",
    "Review HVAC models",
    "Review emails",
    "Call manufacturer"
]

const todoList = document.getElementById("todo-list");

for(const task of tasks) {
    const card = createCard(task);
    todoList.appendChild(card);
}

let lastCard;

function createCard(task) {
    const text = document.createElement("p");
    text.textContent = task;

    const card = document.createElement("div");
    card.classList.add("task");
    card.appendChild(text);

    card.addEventListener("click", () => {

        if(lastCard) {
            lastCard.classList.remove("dark-gray");
        }

        card.classList.add("dark-gray");
        lastCard = card;
    })

    return card;
}