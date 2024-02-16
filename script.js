const quotes = [{
    text: "You must be the change you wish to see in the world." ,
    author: "- Mahatma Gandhi"
},{
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "- Mother Teresa"
},{
    text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
    author: "- Martin Luther King Jr."
},{
    text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,
    author: "- Helen Keller" 
},{
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "- Thomas A.Edison" 
},{
    text: "Success is not final; failure is not fatal: It is the courage to continue that counts." ,
    author: "- Winston S.Churchill" 
},{
    text: "It is during our darkest moments that we must focus to see the light." ,
    author: "- Aristotle"
},{
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "- Confucius" 
},{
    text: "Your time is limited, don't waste it living someone else's life." ,
    author: "- Steve Jobs" 
},{
    text: "The only impossible journey is the one you never begin." ,
    author: "- Tony Robbins"
},
];

//function to get a random quote
function getRandomQuote(){
    return quotes [Math.floor(Math.random()* quotes.length)];
}

//function to display a new quote after countdown
function displayNewQuoteAfterCountdown(){
    let count = 8;
    const countdownEle = document.querySelector('.seconds');

    //update countdown every second
    const countdownInterval = setInterval(() => {
        countdownEle.innerHTML = count < 10 ? '0' + count + 's': count + 's';
        count--;

        if(count < 0) {
            clearInterval(countdownInterval);
            countdownEle.innerText = '00s';
            displayNewQuote();
        }
    },1000);
}

//function to display a new quote
function displayNewQuote(){
    const quoteContainer = document.querySelector('.quote-cnt');
    const quote = getRandomQuote();

    quoteContainer.innerHTML = `<span class="quote">"${quote.text}"
</span>
<div class="author">-${quote.author}</div>

<div class="btn">
    <button>Next Quote in <span class="seconds">00s</span></button>
</div>`;

displayNewQuoteAfterCountdown();
}

//intital call
displayNewQuote();