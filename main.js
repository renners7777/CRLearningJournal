function displayArticles() {
    let hiddenArticles = document.getElementById("hidden-articles");
    let elBtn = document.querySelector(".btn")
    if (hiddenArticles.style.display === "none") {
    hiddenArticles.style.display = "block";
    elBtn.textContent = "View less"
    } else {
    hiddenArticles.style.display = "none";
    elBtn.textContent = "View more"
    }
}