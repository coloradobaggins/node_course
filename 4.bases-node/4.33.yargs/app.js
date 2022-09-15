const {createFile} = require('./helpers/multiplier');
const argv = require('./config/yargs');

/**
 * 
 * Yargs, colors, process
 * 
 * 
 */

console.log(argv);

const base = argv.base;
const listar = argv.list;
const endNum = argv.hasta;

console.log(base);
console.log(listar);


createFile(base, listar, endNum)
    .then(result=>console.log(`Archivo creado`))
    .catch(err => console.error(err));

