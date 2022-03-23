const actorFormLabel = document.querySelector('.actor-form-label');
const actorNameInput = document.getElementById('actorNameInput');
const skipCboxInput = document.getElementById('skipCboxInput');
const skipCboxLabel = document.getElementById('skipCboxLabel');

actorNameInput.addEventListener('input', function (e) {
    let val = e.target.value.trim();
    if (val.length) {
        skipCboxInput.setAttribute('disabled', 'disabled');
        skipCboxLabel.style.cursor = "default";
        submitBtn.removeAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        submitBtnArrow.style.cursor = "pointer";
    } else {
        skipCboxInput.removeAttribute('disabled', 'disabled');
        skipCboxLabel.style.cursor = "pointer";
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "0";
        submitBtnArrow.style.cursor = "default";
    }
});

skipCboxInput.addEventListener('click', (event) => {
    event.target.classList.toggle('active');

    if (skipCboxInput.classList.contains('active')) {
        actorNameInput.setAttribute('disabled', 'disabled');
        actorFormLabel.style.cursor = "default";
        submitBtn.removeAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        submitBtnArrow.style.cursor = "pointer";
    } else if (!skipCboxInput.classList.contains('active')) {
        actorNameInput.removeAttribute('disabled', 'disabled');
        actorFormLabel.style.cursor = "text";
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.opacity = "0";
        submitBtnArrow.style.cursor = "default";
    }
});