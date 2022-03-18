const sunnyBtn = document.querySelector('.sunny_button');
const interstellaBtn= document.querySelector('.interstella_button');
const harrypotterBtn = document.querySelector('.harrypotter_button');

const movieName = document.querySelector('.movie_name');
const movieInfo = document.querySelector('.movie_info');
const li = document.getElementsByTagName('li');

function Movie(name, releaseDate, genre) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.genre = genre;
}

function PrintMovieInfo(movie) {
    movieName.innerHTML=`${movie.name}`;
    li[0].innerHTML=`${movie.releaseDate}`;
    li[1].innerHTML=`${movie.genre}`;
}

sunnyBtn.addEventListener('click', () => {
    const movie = new Movie('써니👭', 2011, '드라마 / 코미디');
    PrintMovieInfo(movie);
});

interstellaBtn.addEventListener('click', () => {
    const movie = new Movie('💫인터스텔라🌠', 2014, 'SF / 모험');
    PrintMovieInfo(movie);
});

harrypotterBtn.addEventListener('click', () => {
    const movie = new Movie('해리포터 전 시리즈🔮', 2001, '판타지 / 모험');
    PrintMovieInfo(movie);
});
