//Exercise 1: Get the array of all Artists.
function getAllArtists(songs){

    let result = songs.map(song => song.artist);
    console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(songs, artist){
    let result = songs.filter(song => song.artist === artist);  
    console.log("Exercise 2 ->", result);
    return result;
};

//Exercise 3: Alphabetic order by title ---
function orderAlphabetically(){
    //Write your code here
    let result = songs.sort((a, b) => a.title.localeCompare(b.title));  
    console.log("Exercise 3 ->", result);
    return result;
};

//Exercise 4: Order by year, ascending ---
function orderByYear(){
    //Write your code here
    let result = songs.sort((a, b) => a.year - b.year);  
    console.log("Exercise 4 ->", result);
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
    //Write your code here
    let result = songs.filter(song => song.genre.includes(genre));  
    console.log("Exercise 5 ->", result);
    return result;
};

//Exercise 6: Modify the duration of songs to seconds ---
function minutsToSeconds(songs) {
    //Write your code here
    let result = songs.map(song => {
        let time = song.duration.split('min ');
        let minutes = parseInt(time[0]);
        let seconds = parseInt(time[1].slice(0, -3));
        return minutes * 60 + seconds;
    }); 
    console.log("Exercise 6 ->", result);
    return result;
};

//Exercise 7: Get the longest song ---
function getLongestSong(){
    //Write your code here
    let durationsInSeconds = minutsToSeconds(songs);
    let longestIndex = durationsInSeconds.reduce((longestIndex, duration, currentIndex) => {
        return (duration > durationsInSeconds[longestIndex]) ? currentIndex : longestIndex;
    }, 0);
    let result = songs[longestIndex];
    console.log("Exercise 7 ->", result);
    return result;
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function


function getShortestSong(){
    //Write your code here
    let durationsInSeconds = minutsToSeconds(songs);
    let shortestIndex = durationsInSeconds.reduce((shortestIndex, duration, currentIndex) => {
        return (duration < durationsInSeconds[shortestIndex]) ? currentIndex : shortestIndex;
    }, 0);
    let result = songs[shortestIndex];
    console.log("Exercise 8 ->", result);
    return result;
};

export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong, getShortestSong};
