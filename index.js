// Quote's Content
const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('authorText');
const tagText1 = document.getElementById('tagText1');
const tagText2 = document.getElementById('tagText2');
let callRandomQuote;

// Buttons
const randomQuote = document.getElementById('randomQuote');
const shareQuote = document.getElementById('shareQuote');


fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
    .then((response) => response.json())
    .then((data) => {
        callRandomQuote = () => {
            let randomQuote = Math.floor(Math.random() * data.length);

            quoteText.innerText = `"${data[randomQuote].quote}"`
            authorText.innerText = data[randomQuote].author

            tagText1.innerText = data[randomQuote].tags[0]
            tagText2.innerText = data[randomQuote].tags[1]

            let textOfQuote = quoteText.innerHTML
            shareQuote.onclick = function () {
                navigator.clipboard.writeText(textOfQuote)
                    .then(() => alert("✅ Quote Copied!"))
                    .catch(err => console.error("An Error Ocurried: ", err));
            }
        }
        callRandomQuote()
    }
    )
    .catch((error) => {
        console.log(error)
    });