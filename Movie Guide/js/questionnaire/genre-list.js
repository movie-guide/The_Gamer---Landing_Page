const genreItemBtn = document.querySelectorAll('.genre-item-btn');
const submitBtn = document.getElementById('submitBtn');
const submitBtnArrow = document.getElementById('submitBtnArrow');

submitBtn.setAttribute('disabled', 'disabled');

for (let i = 0; i < genreItemBtn.length; i++) {
    genreItemBtn[i].addEventListener('click', showBtn);
}

function showBtn() {
    this.classList.toggle('active');
    for (let i = 0; i < genreItemBtn.length; i++) {
        if (genreItemBtn[i].classList.contains('active')) {
            submitBtn.removeAttribute('disabled', 'disabled');
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
            submitBtnArrow.style.cursor = "pointer";
            return;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.style.opacity = "0";
            submitBtn.style.cursor = "default";
            submitBtnArrow.style.cursor = "default";
        }
    }
}