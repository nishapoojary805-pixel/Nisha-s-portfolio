document.addEventListener("DOMContentLoaded", function () {
console.log("Welcome to Nisha's Portfolio!");

```
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You selected: " + link.textContent);
    });
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transition = "0.3s ease";
    });
});
```

});
