var words = ["about", "above", "abuse", "added", "adult", "after", "seven", "world", "about", "again", "heart", "pizza", "water", "happy", "sixty", "board", "month", "angel", "death", "green", "music", "fifty", "three", "party", "piano", "mouth", "woman", "sugar", "amber", "dream", "apple", "laugh", "tiger", "faith", "earth", "river", "money", "peace", "forty", "words", "smile", "house", "alone", "watch", "lemon", "south", "anime", "after", "women", "admin", "jesus", "stone", "blood", "thing", "light", "david", "cough", "story", "power", "india", "point", "today", "anger", "night", "glory", "april", "candy", "puppy", "above", "phone", "vegan", "forum", "birth", "other", "grace", "queen", "pasta", "plant", "jacob", "smart", "knife", "magic", "jelly", "black", "media", "honor", "cycle", "truth", "zebra", "train", "bully", "brain", "mango", "under", "dirty", "eight", "fruit", "panda", "truck", "field", "bible", "radio", "dance", "voice", "sorry", "paris", "lover", "never", "royal", "venus", "metal", "penny", "honey", "color", "cloud", "scarf", "state", "value", "mouse", "north", "bread", "daily", "paper", "beard", "alive", "place", "chair", "badge", "worth", "crazy", "photo", "dress", "table", "cross", "logan", "clear", "white", "march", "going", "ocean", "belly", "ninja", "young", "range", "great", "sweet", "scent", "beach", "space", "allah", "clock", " sound", "fever", "youth", "union", "plate", "eagle", "human", "start", "funny", "right", "guard", "witch", "think", "image", "album", "catch", "sleep", "below", "quran", "organ", "storm", "silly", "berry", "rhyme", "olive", "leave"];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var chosen = words[random(0, words.length - 1)];
var given = shuffleword(chosen);
var answer = "";
var count = 0;

document.querySelector("#a").innerHTML = given.charAt(0);
document.querySelector("#b").innerHTML = given.charAt(1);
document.querySelector("#c").innerHTML = given.charAt(2);
document.querySelector("#d").innerHTML = given.charAt(3);
document.querySelector("#e").innerHTML = given.charAt(4);

document.querySelector("#a").addEventListener("click", press_a);
document.querySelector("#b").addEventListener("click", press_b);
document.querySelector("#c").addEventListener("click", press_c);
document.querySelector("#d").addEventListener("click", press_d);
document.querySelector("#e").addEventListener("click", press_e);




var a = false;
var b = false;
var c = false;
var d = false;
var e = false;


function press_a() {
    if (a === false) {
        document.querySelector("#a").classList.toggle("press-i");
        answer = answer + document.querySelector("#a").innerHTML;
        document.querySelector("#answer").innerHTML += document.querySelector("#a").innerHTML;
        ++count;
        if (count == 5) check(chosen, answer);
        a = true;
    }
}

function press_b() {
    if (b == false) {
        document.querySelector("#b").classList.toggle("press-i");
        answer = answer + document.querySelector("#b").innerHTML;
        document.querySelector("#answer").innerHTML += document.querySelector("#b").innerHTML;
        ++count;
        if (count == 5) check(chosen, answer);
        b = true;
    }
}

function press_c() {
    if (c == false) {
        document.querySelector("#c").classList.toggle("press-i");
        answer = answer + document.querySelector("#c").innerHTML;
        document.querySelector("#answer").innerHTML += document.querySelector("#c").innerHTML;
        ++count;
        if (count == 5) check(chosen, answer);
        c = true;
    }
}

function press_d() {
    if (d == false) {
        document.querySelector("#d").classList.toggle("press-i");
        answer = answer + document.querySelector("#d").innerHTML;
        document.querySelector("#answer").innerHTML += document.querySelector("#d").innerHTML;
        ++count;
        if (count == 5) check(chosen, answer);
        d = true;
    }
}

function press_e() {
    if (e == false) {
        document.querySelector("#e").classList.toggle("press-i");
        answer = answer + document.querySelector("#e").innerHTML;
        document.querySelector("#answer").innerHTML += document.querySelector("#e").innerHTML;
        ++count;
        if (count == 5) check(chosen, answer);
        e = true;
    }
}


function check(chosen, answer) {
    if (answer.localeCompare(chosen) == 0) {
        document.querySelector("#answer").classList.toggle("true");
        document.querySelector("#next").classList.toggle("vanish");
    }
    else {
        document.querySelector("#answer").classList.toggle("false");
        document.querySelector("#reset").classList.toggle("vanish");
    }
}





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


document.querySelector("#reset").addEventListener("click", reset);



function reset() {


    a = false;
    b = false;
    c = false;
    d = false;
    e = false;

    press_a();
    press_b();
    press_c();
    press_d();
    press_e();

    count = 0;
    answer = "";

    document.querySelector("#reset").classList.toggle("vanish");
    document.querySelector("#answer").classList.toggle("false");

    document.querySelector("#a").innerHTML = given.charAt(0);
    document.querySelector("#b").innerHTML = given.charAt(1);
    document.querySelector("#c").innerHTML = given.charAt(2);
    document.querySelector("#d").innerHTML = given.charAt(3);
    document.querySelector("#e").innerHTML = given.charAt(4);

    a = false;
    b = false;
    c = false;
    d = false;
    e = false;

    document.querySelector("#answer").innerHTML = "";
    document.querySelector("#a").addEventListener("click", press_a);
    document.querySelector("#b").addEventListener("click", press_b);
    document.querySelector("#c").addEventListener("click", press_c);
    document.querySelector("#d").addEventListener("click", press_d);
    document.querySelector("#e").addEventListener("click", press_e);





}


function check(chosen, answer) {
    if (answer.localeCompare(chosen) == 0) {
        document.querySelector("#answer").classList.toggle("true");
        document.querySelector("#next").classList.toggle("vanish");
    }
    else {
        document.querySelector("#answer").classList.toggle("false");
        document.querySelector("#reset").classList.toggle("vanish");
    }
}




























function shuffleword(word) {
    var shuffleword = '';
    word = word.split('');
    while (word.length > 0) {
        shuffleword += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffleword;
}