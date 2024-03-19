const button = document.querySelector(".button");
button.addEventListener("click", () => {
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
        button.querySelector("i").classList.replace("fa-solid fa-cloud-arrow-down", "");
        button.querySelector("span").innerText = "Completed";
    }, 6000);
});