import { encryptedFlags } from "./robots.js";

function caesarDecrypt(text, shift) {
    return text
        .split("")
        .map((char) => {
            if (char.match(/[A-Za-z]/)) {
                const base = char.charCodeAt(0) < 97 ? 65 : 97;
                return String.fromCharCode(
                    ((char.charCodeAt(0) - base - shift + 26) % 26) + base
                );
            }
            return char;
        })
        .join("");
}

document.querySelectorAll("input[type='button']").forEach((button) => {
    button.addEventListener("click", (event) => {
        const challengeId = event.target.id.replace("get-value", "challenge");
        const userInput = document.getElementById(challengeId).value;

        const encryptedFlag = encryptedFlags.get(challengeId);
        const correctFlag = encryptedFlag
            ? caesarDecrypt(encryptedFlag, 5)
            : null;

        if (correctFlag && correctFlag === userInput) {
            alert(`Correct flag for ${challengeId}! 🎉`);
            document
                .getElementById(challengeId)
                .closest(".challenge-box").style.backgroundColor = "lightgreen";
        } else {
            alert(`Incorrect flag for ${challengeId}. Try again.`);
        }
    });
});
