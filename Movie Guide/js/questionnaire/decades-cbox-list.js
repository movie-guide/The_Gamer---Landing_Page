const decadesCboxList = document.querySelector('.decades-checkbox-list');
const decadesSkipCboxInput = document.getElementById('decadesSkipCboxInput');


document.addEventListener('DOMContentLoaded', function () {
    const decadesCboxWrap = document.querySelector('.decades-checkbox-wrap');
    const decadesCboxInputs = decadesCboxWrap.querySelectorAll('.decades-checkbox-input');
    const decadesSkipCbox = document.querySelector('.decades-skip-checkbox');

    decadesCboxWrap.addEventListener('click', function (e) {
        for (let i = 0; i < decadesCboxInputs.length; i++) {
            if (decadesCboxInputs[i].checked) {
                decadesSkipCbox.classList.add('disabled');
                submitBtn.removeAttribute('disabled', 'disabled');
                submitBtn.style.opacity = "1";
                submitBtn.style.cursor = "pointer";
                break;
            } else {
                decadesSkipCbox.classList.remove('disabled');
                submitBtn.setAttribute('disabled', 'disabled');
                submitBtn.style.opacity = "0";
            }
        }
    });

    decadesSkipCbox.addEventListener('click', function (e) {
        if (decadesSkipCboxInput.checked) {
            decadesCboxWrap.classList.add('disabled');
            submitBtn.removeAttribute('disabled', 'disabled');
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
        } else {
            decadesCboxWrap.classList.remove('disabled');
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.style.opacity = "0";
        }
    });
});