document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("article h1");
    const h2 = document.querySelector("article h2");

    const h1Height = h1 ? h1.offsetHeight : 0;
    const h2Height = h2 ? h2.offsetHeight : 0;

    document.documentElement.style.setProperty("--h1-height", `${h1Height}px`);
    document.documentElement.style.setProperty("--h2-height", `${h2Height}px`);
});