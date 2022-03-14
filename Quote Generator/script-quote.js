const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById('loader');


// Get Quotes from API
let apiQuote = [];
async function getQuotes() {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuote = await response.json();
        newQuote();

    } catch {
        // Catch Error Here

    }
}


// Show Loading
function loading(){
    loader.hidden = false; //hiding your div
    quoteContainer.hidden = true; 
}

// Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    // Pick random quote from api quote array
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    // console.log(quote);


    // Check if author field is blank and replace it with 'Unknown'
    if (quote.author == null) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine styling
    if (quote.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();

}




// Tweet Quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank'); //blank to open window in a new tab
}

// Event Listeners
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);


// Onload
getQuotes();