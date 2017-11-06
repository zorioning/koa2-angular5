import { app } from '../app';
import { serverPort } from '../config';

/**
 * Get port from environment and store in koa.
 */
const port = normalizePort(process.env.PORT || serverPort);

app.listen(port, () => {
    console.log('Koa started in ' + app.env + ' at ' + port);

});
app.on('error', onError);


function normalizePort(val): boolean | number {
    const normalizedPort = parseInt(val, 10);
    if (isNaN(normalizedPort)) {
        // named pipe
        return val;
    }
    if (normalizedPort >= 0) {
        // port number
        return normalizedPort;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
