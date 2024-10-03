// Подключение модуля net для работы с сетью и ввода/вывода
const net = require('node:net');
const readline = require('node:readline');

// определение порта и хоста для подключения к серверу
const PORT = 3000;
const HOST = 'localhost';

// Создание интерфейса для чтения ввода/вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для подключения к серверу и отправки данных
function connectAndSend(input) {
    // Создание нового сокета для подключения к серверу
    const client = new net.Socket();

    // Подключение к серверу
    client.connect(PORT, HOST, () => {
        console.log('Connected to server');
        // Отправка данных на сервер
        client.write(input);
    });

    // Обработка полученных данных от сервера
    client.on('data', (data) => {
        console.log('Result:', data.toString());
        // Закрытие соединения после получения данных
        client.destroy();
    });
    // Обработка завершения соединения
    client.on('close', () => {
        console.log('Connection closed');
        // Вызов функции для повторного запроса ввода пользователя
        inputToServer();
    });
}
// Функция для запроса ввода пользователя и отправки данных на сервер
function inputToServer() {
    rl.question('Enter two numbers and an operation (e.g., "5 3 +") or type "exit" to quit: ', (input) => {
        // Проверка ввода пользователя для завершения программы
        if (input.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        connectAndSend(input);
    });
}
// Вызов функции для запроса ввода пользователя
inputToServer();