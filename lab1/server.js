// Подключение модуля net для работы с сетью
const net = require("node:net");

// Определение порта сервера
const port = 3000; // порт сервера

// Создание сервера
var server = net.createServer(function (socket) {
    // Обработка подключения клиента
    console.log('client connected');

    // Обработка полученных данных от клиента
    socket.on('data', (data) => {
        // Разделение полученных данных на операнды и операцию
        const [num1, num2, op] = data.toString().trim().split(' ');
        let res;

        // Выполнение арифметической операции
        switch (op) {
            case '*':
                // Умножение
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                // Деление
                res = parseFloat(num1) / parseFloat(num2);
                break;
            case '+':
                // Сложение
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                // Вычитание
                res = parseFloat(num1) - parseFloat(num2);
                break;
            default:
                // Обработка некорректного ввода
                res = 'invalid input';
        }
        // Отправка результата клиенту
        socket.write(res.toString());
    });

    // Обработка завершения соединения
    socket.on('end', () => {
        console.log('server answer result');
    })
});

// Запуск сервера на указанном порте
server.listen(port, () =>
    console.log(`server listening on port:${port}`));