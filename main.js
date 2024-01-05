const apiUrl = 'https://api.quotable.io/random'

async function getRandomQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const quoteText = document.getElementById('quote-text');
        const author = document.getElementById('other');

        quoteText.textContent = data.content;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error.message)
    }
}