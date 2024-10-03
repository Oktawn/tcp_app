const dgram = require('node:dgram') // Импорт модуля для работы с UDP

// Создание UDP-сокета
const server = dgram.createSocket('udp4')

// Обработчик события 'message', вызываемый при получении сообщения от клиента
server.on('message', (msg, rinfo) => {
    const str = msg.toString() // Преобразование полученного сообщения в строку
    console.log(` initial string: ${str}`);

    // Проверка, кратна ли длина строки на 3
    if (str.length % 3 === 0) {

        // Замена всех чисел, делящихся на 3, на пустую строку
        const newMsg = str.replace(/\b\d+\b/g, num => num % 3 !== 0 ? num : '');
        console.log(`Modified message to send back to client: ${newMsg}\n`);

        // Отправка модифицированного сообщения обратно клиенту
        server.send(newMsg, 0, newMsg.length, rinfo.port, rinfo.address, (err) => {
            if (err) {
                console.error(err);
            }
        })
    }
    else {
        console.log('message is not divisible by 3, skipping\n');
    }
})

server.on('listening', () => {
    // Получение адреса и порта сервера
    const address = server.address();
    console.log(`UDP Server listening on ${address.address}:${address.port}`);
});


server.bind(3000) // Привязка сервера к порту 3000