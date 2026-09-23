const PASSWORD = "udaipur";

const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("password-button");
const passwordError = document.getElementById("password-error");

const birthdayScreen = document.getElementById("birthday-screen");
const flame = document.getElementById("flame");
const afterCandle = document.getElementById("after-candle");

const continueButton = document.getElementById("continue-button");
const mainContent = document.getElementById("main-content");


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

        /* Candle stays lit for 5 seconds */

        setTimeout(function() {

            flame.classList.add("flame-out");

            /* Wait 2 seconds, then show the next button */

            setTimeout(function() {
                afterCandle.classList.remove("hidden");
            }, 2000);

        }, 5000);

    } else {

        passwordError.textContent = "Nope. Try again :)";
        passwordInput.value = "";

    }
}


/* LET'S GO BUTTON */

continueButton.addEventListener("click", function() {

    birthdayScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");

    window.scrollTo(0, 0);

});
