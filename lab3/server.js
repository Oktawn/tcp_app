const net = require('node:net');
const readline = require('node:readline');
const { Worker, isMainThread } = require('node:worker_threads');
const { DATA } = require('./student.ts');
const PORT = 3001;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (isMainThread) {
    console.log('Main thread is running',);
    // Это перезагружает текущий файл внутри экземпляра Worker
    new Worker(__filename);
}
else {
    // Это поток-сервер работает внутри экземпляра Worker
    const server = net.createServer((socket) => {
        let listStudents;
        socket.on('data', (data) => {
            const firstChar = data.toString().trim();
            listStudents = DATA.filter((student) => {
                return student.FIO.startsWith(firstChar);
            });

            console.log(listStudents);
            socket.write(JSON.stringify(listStudents));
        });

        socket.on('end', () => {
            console.log('Client disconnected');
        })
    });


    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};

