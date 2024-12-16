const quotes = [
    "What is a... Ducks Pond? - Teachers",
    "When is the official version of Ducks Pond coming out? - literally everyone (2024)",
    "hey look at this *aggressively points to computer screen*. - Dante",
    "Guess what cologne I'm wearing. - Dante",
    "Do your fucking work! - Me",
    "Urgh, wat da fuk - Dalton Trey",
    "ah! my ears burn..",
    "It's time to have some fun... With Uncle Samsonite",
    "If Silas Randolph sees this... COMB YOUR FUCKING HAIR!!!",
    "I will not discriminate with any other game website",
    "Alt links posted soon",
    "SHUT UP ABOUT FOOTBALL BROS, I JUST WANT PEACE",
    "Come here big boy~",
    "Mikael Myer",
    "Boo? Whachu lookin at?! - Carlotta",
    "HEY HEy, hEy, hey... guess what? I'm gonna touch you.",
    "Me when, whe- me when th- the.. me- whe- the me- me when the- Yeah!"0
    "You're my favorite! - My Girlfriend"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const quote = getRandomQuote(); // Get a random quote

// Update header text
document.querySelector('#quote').innerHTML = quote;
