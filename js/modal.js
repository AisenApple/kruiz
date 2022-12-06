const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", e => {
    const overlayElement = document.createElement ("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement ("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement ("div");
    contentElement.classList.add("content");

    containerElement.innerHTML = "Первая строка"

    const CloseElemet = document.createElement("a");
    CloseElemet.classList.add("close");
    CloseElemet.textContent = "x";
    CloseElemet.href = "#";

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(CloseElemet);
    containerElement.appendChild(containerElement);
    body.appendChild(overlayElement);
})