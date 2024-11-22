const challenge1 = document.getElementById("challenge1");
const getValue1 = document.getElementById("get-value1");

getValue1.addEventListener("click", () => {
    if (challenge1.value === "NCF{YoU_g0T_mE_b@by}") {
        const bg = document.getElementById("crypto");
        bg.style.backgroundColor = "lightgreen";

        localStorage.setItem("challengeValue", challenge1.value);
        localStorage.setItem("cryptoBgColor", "lightgreen");
    }
});

window.addEventListener("load", () => {
    const savedValue = localStorage.getItem("challengeValue");
    const savedColor = localStorage.getItem("cryptoBgColor");

    if (savedValue) {
        challenge1.value = savedValue;
    }

    if (savedColor) {
        crypto.style.backgroundColor = savedColor;
    }
});

const challenge2 = document.getElementById("challenge2");
const getValue2 = document.getElementById("get-value2");

getValue2.addEventListener("click", () => {
    if (challenge2.value === "NCF{stillHidingAndUGotMe} ") {
        const bg = document.getElementById("webexpo");
        bg.style.backgroundColor = "lightgreen";

        localStorage.setItem("challengeValue", challenge2.value);
        localStorage.setItem("cryptoBgColor", "lightgreen");
    }
});

const challenge3 = document.getElementById("challenge3");
const getValue3 = document.getElementById("get-value3");

getValue3.addEventListener("click", () => {
    if (challenge3.value === "NCF{m3t4d4t4_r3v34ls_s3cr3ts}") {
        const bg = document.getElementById("forensics");
        bg.style.backgroundColor = "lightgreen";

        localStorage.setItem("challengeValue", challenge3.value);
        localStorage.setItem("cryptoBgColor", "lightgreen");
    }
});

const challenge4 = document.getElementById("challenge4");
const getValue4 = document.getElementById("get-value4");

getValue4.addEventListener("click", () => {
    if (challenge4.value === "NCF{iAmHere}") {
        const bg = document.getElementById("binary");
        bg.style.backgroundColor = "lightgreen";

        localStorage.setItem("challengeValue", challenge4.value);
        localStorage.setItem("cryptoBgColor", "lightgreen");
    }
});

const challenge5 = document.getElementById("challenge5");
const getValue5 = document.getElementById("get-value5");

getValue5.addEventListener("click", () => {
    if (challenge5.value === "NCF{korea}") {
        const bg = document.getElementById("osint");
        bg.style.backgroundColor = "lightgreen";

        localStorage.setItem("challengeValue", challenge5.value);
        localStorage.setItem("cryptoBgColor", "lightgreen");
    }
});
