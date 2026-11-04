let newQuote = document.querySelector('#js-new-quote');
newQuote.addEventListener('click', getQuote);

let endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
    try {
        let output = await fetch(endpoint);

        if (output.ok) {
            let text = await output.json();
            console.log(text);
            displayQuote(text);
        } else {
            console.log(output.status);
            alert("error");
        }
    } catch (error) {
        console.log(error);
        alert("error");
    }
}

function displayQuote(quote) {
    document.getElementById('js-quote-text').textContent = quote.question;
}

getQuote();