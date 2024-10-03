// Подключение модуля net для работы с сетью и ввода/вывода
const net = require('node:net');
const readline = require('node:readline');

// определение порта и хоста для подключения к серверу
const PORT = 3001;
const HOST = 'localhost';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для подключения к серверу и отправки данных
function connectAndSend(input) {
    // Создание нового сокета для подключения к серверу
    const client = new net.Socket();

    client.connect(PORT, HOST, () => {
        console.log('Connected to server');
        client.write(input);
    });

    // Обработка полученных данных от сервера и преобразование их в JSON
    client.on('data', (data) => {
        console.log('Result:', JSON.parse(data.toString()));
        client.destroy();
    });
    client.on('close', () => {
        console.log('Connection closed');
        inputToServer();
    });
}

function inputToServer() {
    rl.question('Enter first char last name  or type "exit" to quit: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        connectAndSend(input);
    });
}
inputToServer()