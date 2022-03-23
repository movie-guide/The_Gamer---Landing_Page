cancelBtn.addEventListener('click', function () {
    if (progressBar.style.width === "33%") {
        submitBtn.removeAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        progressBar.style.width = "0";
        actorForm.style.transform = "translate(300%, -50%)";
        genreList.style.transform = "translate(0)";
        submitBtnClicks--;
        cancelBtn.style.opacity = "0";
        cancelBtn.style.cursor = "default";
    }
    else if (progressBar.style.width === "66%") {
        submitBtn.removeAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        progressBar.style.width = "33%";
        decadesCboxList.style.transform = "translate(300%, -50%)";
        actorForm.style.transform = "translate(-50%, -50%)";
        submitBtnClicks--;
    }
    else if (progressBar.style.width === "100%") {
        submitBtn.removeAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        progressBar.style.width = "66%";
        countrySelectForm.style.transform = "translate(300%, -50%)";
        decadesCboxList.style.transform = "translate(-50%, -50%)";
        submitBtnClicks--;
    }
});