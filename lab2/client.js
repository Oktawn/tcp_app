const dgram = require('node:dgram'); // модуль для работы с UDP
const readline = require('node:readline'); // модуль для работы с вводом/выводом

// Создание UDP-сокета
const client = dgram.createSocket('udp4')

// Создание интерфейса для чтения ввода/вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Определение порта и хоста для подключения к серверу
const PORT = 3000;
const HOST = 'localhost';

// Обработка полученных данных от сервера
client.on('message', (msg) => {
    console.log(`Received message back from server: ${msg.toString()}\n`);
});

client.on('error', (error) => {
    console.error(`UDP client error: ${error}`);
});


// Функция для отправки сообщения на сервер
const sendMessage = () => {
    rl.question('Enter a message to send to the server (type "exit" to quit): ', (message) => {
        if (message.toLowerCase() === 'exit') {
            // Закрытие интерфейса ввода/вывода и UDP-сокета
            rl.close();
            client.close();
            return;
        }

        // Отправка сообщения на сервер
        client.send(message, PORT, HOST, (error) => {
            if (error) {
                console.error(`Error sending message to server: ${error}`);
            } else {
                console.log('Message sent to server successfully\n');
            }
            // Повторный вызов функции для отправки сообщения
            sendMessage();
        });
    });
}
// Вызов функции для отправки сообщения
sendMessage()