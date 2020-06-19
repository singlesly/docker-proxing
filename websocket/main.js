const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: Number(process.env.PORT) });


wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(`your message ${message}`)
    });

    ws.send('something');
});
