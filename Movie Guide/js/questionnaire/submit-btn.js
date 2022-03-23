const genreList = document.querySelector('.genre-list');
const progressBar = document.getElementById('progressBar');
const actorForm = document.querySelector('.actor-form');
const cancelBtn = document.querySelector('.cancel-btn');
const cancelBtnArrow = document.getElementById('cancelBtnArrow');

// Submit Btn

let submitBtnClicks = 1;

submitBtn.onclick = function (b) {
    submitBtnClicks++;
}

submitBtn.addEventListener('click', function () {
    if (submitBtnClicks === 2) {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "0";
        submitBtn.style.cursor = "default";
        submitBtnArrow.style.cursor = "default";
        progressBar.style.width = "33%";
        genreList.style.transform = "translate(-300%, 0)";
        actorForm.style.transform = "translate(-50%, -50%)";
        cancelBtn.style.opacity = "1";
        cancelBtn.style.cursor = "pointer";
        cancelBtnArrow.style.cursor = "pointer";
    }
    else if (submitBtnClicks === 3) {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "0";
        submitBtn.style.cursor = "default";
        progressBar.style.width = "66%";
        actorForm.style.transform = "translate(-300%, -50%)";
        decadesCboxList.style.transform = "translate(-50%, -50%)";
    }
    else if (submitBtnClicks === 4) {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "0";
        submitBtn.style.cursor = "default";
        progressBar.style.width = "100%";
        decadesCboxList.style.transform = "translate(-300%, -50%)";
        countrySelectForm.style.transform = "translate(-50%, -50%)";
    }
});