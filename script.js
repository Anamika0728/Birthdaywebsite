const PASSWORD = "udaipur";

const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("password-button");
const passwordError = document.getElementById("password-error");

const birthdayScreen = document.getElementById("birthday-screen");
const flame = document.getElementById("flame");
const candleArea = document.getElementById("candle-area");
const afterCandle = document.getElementById("after-candle");
const continueButton = document.getElementById("continue-button");
const mainContent = document.getElementById("main-content");
const swipeInstruction = document.getElementById("swipe-instruction");
const smoke = document.getElementById("smoke");


/* PASSWORD */

passwordButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {

    if (passwordInput.value === PASSWORD) {

        passwordScreen.classList.add("hidden");
        birthdayScreen.classList.remove("hidden");

        flame.classList.remove("flame-out");
        afterCandle.classList.add("hidden");

    } else {

        passwordError.textContent = "Nope. Try again :)";
        passwordInput.value = "";

    }
}


/* SWIPE ACROSS FLAME */

let startX = 0;
let startY = 0;

candleArea.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;

});

candleArea.addEventListener("touchend", function(event) {

    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(endX - startX);
    const distanceY = Math.abs(endY - startY);

    /* Only count a clear sideways swipe */

    if (distanceX > 50 && distanceX > distanceY) {
        blowOutCandle();
    }

});


function blowOutCandle() {

    /* Stop repeated swipes */

    candleArea.style.pointerEvents = "none";

    /* Flame disappears */

    flame.classList.add("flame-out");

    /* Show smoke */

    smoke.classList.add("smoke-rise");

    /* Hide instruction */

    swipeInstruction.classList.add("hidden");

    /* Wait a moment, then show message */

    setTimeout(function() {

        afterCandle.classList.remove("hidden");

    }, 1200);

}


/* LET'S GO */

continueButton.addEventListener("click", function() {

    birthdayScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");

    window.scrollTo(0, 0);

});
