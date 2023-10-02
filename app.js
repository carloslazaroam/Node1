const os = require('os');

const userInfo = os.userInfo();
const nombreUsuario = userInfo.username;

console.log(`Hola, ${nombreUsuario}! ¡Bienvenido!`);