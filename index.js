var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.isIntersecting
            ? entry.target.classList.add("show")
            : entry.target.classList.remove("show");
    });
});

const hiddenElements = document.querySelectorAll("div.hidden");

hiddenElements.forEach((el) => observer.observe(el));
