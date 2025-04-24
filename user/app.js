document.addEventListener('DOMContentLoaded', initialise.bind(this));

// Use the below to test permanent sleep
// http://127.0.0.1:44448/?site=https://httpstat.us/200?sleep=5001

// Use the below to test temporary sleep
// http://127.0.0.1:44448/?site=https://httpstat.us/200?sleep=4999

let targetSite = null;

function initialise() {
    window.setInterval(updateLoadingMessage.bind(this), 5000);

    const urlParams = new URLSearchParams(window.location.search);
    targetSite = urlParams.get('site') || 'https://devorg69-dev-ed.develop.my.site.com';

    const url = new URL(targetSite);
    const hostname = url.hostname.replace(/^www\./, '');
    const domainParts = hostname.split('.');
    let siteName = domainParts.length > 2 ? domainParts[0].charAt(0).toUpperCase() + domainParts[0].slice(1) : domainParts[0].charAt(0).toUpperCase() + domainParts[0].slice(1);

    if (siteName.toLowerCase() === 'devorg69-dev-ed') {
        if (siteName.toLowerCase().endsWith('/portfolio')) {siteName = 'Portfolio Site';}
        else {siteName = 'LWR Site'}
    }

    document.title = `Redirecting to ${siteName} - Luenyx`;
    document.querySelector('.redirect-title').textContent = `Redirecting to ${siteName}`;
    this.checkSiteStatus();
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

async function checkSiteStatus() {
    async function checkSite() {
        console.log(`Checking ${targetSite}...`);
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => {controller.abort();}, 5000);

        let excepted = false;
        try {await window.fetch(targetSite, {method: 'HEAD', mode: 'no-cors', cache: 'no-store', signal: controller.signal});}
        catch (error) {excepted = true;}

        window.clearTimeout(timeoutId);
        return excepted === false;
    }

    while (await checkSite() === false) {
        await new Promise(resolve => window.setTimeout(resolve, 2500));
    }

    window.location.href = targetSite;
}
