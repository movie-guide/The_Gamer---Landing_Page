const countryList = document.querySelector('.country-select-list');
const countryListItems = document.querySelectorAll('.country-select-item');
const submitBtnFinal = document.getElementById('submitBtnFinal');

submitBtnFinal.setAttribute('disabled', 'disabled');

for (let i = 0; i < countryListItems.length; i++) {
    countryListItems[i].addEventListener('click', hideFinalBtn);
}

function hideFinalBtn() {
    this.classList.add('active');
    for (let i = 0; i < countryListItems.length; i++) {
        if (countryListItems[i].classList.contains('active')) {
            submitBtnFinal.removeAttribute('disabled', 'disabled');
            submitBtnFinal.style.opacity = "1";
            submitBtnFinal.style.cursor = "pointer";
            submitBtnFinal.style.top = "250%";
        }
    }
}

const countrySelectForm = document.querySelector('.country-select-form');
const countrySelectWrap = document.querySelectorAll('.country-select-wrap');

countrySelectWrap.forEach(function () {
    const countrySelectBtn = document.querySelector('.country-select-btn');
    const countrySelectList = document.querySelector('.country-select-list');
    const countrySelectItems = document.querySelectorAll('.country-select-item');
    const countrySelectHiddenInput = document.querySelector('.country-select-input__hidden');

    countrySelectBtn.addEventListener('click', function (e) {
        countrySelectList.classList.toggle('country-select-list--visible');
        countrySelectForm.classList.toggle('active');
        this.classList.add('country-select-btn--active');
    });

    countrySelectItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            countrySelectBtn.innerText = this.innerText;
            countrySelectBtn.focus();
            countrySelectHiddenInput.value = this.dataset.value;
            countrySelectList.classList.remove('country-select-list--visible');
            countrySelectForm.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target !== countrySelectBtn) {
            countrySelectBtn.classList.remove('country-select-btn--active');
            countrySelectList.classList.remove('country-select-list--visible');
            countrySelectForm.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            countrySelectBtn.classList.remove('country-select-btn--active');
            countrySelectList.classList.remove('country-select-list--visible');
            countrySelectForm.classList.remove('active');
        }
    });
});