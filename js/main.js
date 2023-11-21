const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let x = 15; 
PersonalMovieDB = {
    movies: [],
    privat : false
};

let fish = ["polo", undefined, "shark"];

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean
for (let i = 0; i < 2; i++) {
    const   a = prompt("What is your favorite film?", ""),
            b = +prompt("What is it's rating?", "");
    if ( a != null && b != null && a != '' && b != '' && a.length < 50 && b !== NaN) { 
        console.log('Done');
        PersonalMovieDB.movies[a] = b;
    }
    else
    {
        i--;
        console.log('Error');
    }
    
    console.log(PersonalMovieDB);
}

    console.log(PersonalMovieDB.movies);
