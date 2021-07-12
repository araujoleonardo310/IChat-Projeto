const socket = io()

const clientsTotal = document.getElementById('client-total')

const messageContainer = document.getElementById('message-container')
const nameInput = document.getElementById('name-input')
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})

socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Conectados: ${data}`
})

function sendMessage() {
    console.log(messageInput.Value)
    const data = {
        name: nameInput.Value,
        message: messageInput.Value,
        dataTime: new Date()
    }
    socket.emit('message', data)
}

socket.on('chat-message', (data) => {
    console.log(data)
})