/*const button = document.querySelector('#first-section mybutton')

button.addEventListener('click', function (e) {
    //console.log(e.target);
    // console.log(e);
    alert("Button clicked!");
});

const newButton = document.querySelector('#first-section mybutton2')
newButton.addEventListener('click', function (body) {
    //console.log(e.target);
    // console.log(e);
    alert("Button clicked!");
});
*/
const button = document.querySelector('#first-section mybutton');
button.addEventListener("click", function (e) {
    alert("button clicked!");
});

const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
};
const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function () {
        changeClassBlueBackground();
    });
};
const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
        alert("Hello World!");
    });
};

attachEventToAlertButton();
attachEventToChangeColorButton();