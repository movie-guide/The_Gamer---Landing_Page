// TMDB

const API_KEY = 'api_key=d9172e41bf93ea77fb5869bf1679a83a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const searchPersonURL = BASE_URL + '/search/person?' + API_KEY;

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

// Selected Genre

const main = document.getElementById('main');
const tagsEl = document.getElementById('tags');

let selectedGenre = []
setGenre();
function setGenre() {
    tagsEl.innerHTML = '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id = genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if (selectedGenre.length == 0) {
                selectedGenre.push(genre.id);
            } else {
                if (selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => {
                        if (id == genre.id) {
                            selectedGenre.splice(idx, 1);
                        }
                    })
                } else {
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')))
        })
        tagsEl.append(t);
    })
}

// Show Btn

const genreList = document.getElementById('tags');
const genreItemBtn = document.querySelectorAll('.tag');
const submitBtn = document.querySelector('#submitBtn');
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

// Get Movies

getMovies(API_URL);

function getMovies(url) {

    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        if (data.results.length !== 0) {
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if (currentPage <= 1) {
                prev.classList.add('disabled');
                next.classList.remove('disabled')
            } else if (currentPage >= totalPages) {
                prev.classList.remove('disabled');
                next.classList.add('disabled')
            } else {
                prev.classList.remove('disabled');
                next.classList.remove('disabled')
            }

            tagsEl.scrollIntoView({ behavior: 'smooth' })

        } else {
            main.innerHTML = `<h1 class="no-results">No Results Found</h1>`
        }

    })

}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button
            </div>
        
        `

        main.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
            console.log(id)
            openNav(movie)
        })
    })
}

// Submit Btn

const actorForm = document.querySelector('.actor-form');

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
        // progressBar.style.width = "33%";
        genreList.style.transform = "translate(-300%, 0)";
        actorForm.style.transform = "translate(-50%, -50%)";
        // cancelBtn.style.opacity = "1";
        // cancelBtn.style.cursor = "pointer";
        // cancelBtnArrow.style.cursor = "pointer";
    }
});

// Actor Form

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
        getMovies(searchPersonURL + '&query=' + encodeURI(val));
        console.log(searchPersonURL + '&query=' + encodeURI(val));
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