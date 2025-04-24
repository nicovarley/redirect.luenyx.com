document.addEventListener('DOMContentLoaded', initialise.bind(this));

function initialise() {
    window.setInterval(updateLoadingMessage.bind(this), 5000);
}

function updateLoadingMessage() {
    const loadingMessages = [
        'LWR site is booting',
        'Still warming up',
        'Almost there, promise!',
        'Taking its sweet time',
        'Waking up the server hamsters',
        'I swear, it\'s still loading!',
        'The server is doing its best',
        'Have you tried a coffee break?',
        'The server is feeling shy today',
        'Patience is a virtue they say',
        'Well, this is getting awkward',
        'Like watching paint dry',
        'Is anyone else sweating?',
        'Legend says it will load one day',
        'The longest minute of your life?',
        'Loading slower than a snail'
    ];

    const loadingMessageElement = document.querySelector('.loading-message');
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);

    const dotsElement = document.querySelector('.dots');

    const messageText = loadingMessages[randomIndex];
    loadingMessageElement.innerHTML = '';
    loadingMessageElement.appendChild(document.createTextNode(messageText));

    if (dotsElement) {
        loadingMessageElement.appendChild(dotsElement);
    } 
    else {
        const newDotsElement = document.createElement('span');
        newDotsElement.className = 'dots';
        loadingMessageElement.appendChild(newDotsElement);
    }
}
