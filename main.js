let btn = document.getElementById('btn');
let lastSelect;


let quotes = ["It's going to be hard, but hard does not mean impossible.", 
"It always seems impossible until it's done.",
 "With the new day comes new strengths and new thoughts.", 
 "There is only one center of the universe you can be certain of improving, and that's your own self.", 
"If you're going through hell keep going."];

let random = () => {
let randQuotes = quotes[Math.floor(Math.random() * quotes.length)]
if(randQuotes === lastSelect) {
    return random()
}
lastSelect = randQuotes;
let output = document.getElementById('output').innerHTML = randQuotes
};

btn.addEventListener("click", random);