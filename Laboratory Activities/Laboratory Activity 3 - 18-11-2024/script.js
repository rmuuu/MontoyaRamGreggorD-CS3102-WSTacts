const textInput = document.getElementById('textInput');
const wordCounter = document.getElementById('wordcount');
const sentenceCounter = document.getElementById('sentencecount');

function updateCounts() {

    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.length > 0);
    const sentenceCount = sentences.length;

    wordCounter.textContent = `Word Count: ${wordCount}`;
    sentenceCounter.textContent = `Sentence Count: ${sentenceCount}`;
}

textInput.addEventListener('input', updateCounts);