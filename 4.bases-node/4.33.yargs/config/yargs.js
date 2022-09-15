const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multuplicar'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra en consola dicha tabla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Num final tabla'
                })
                .check( (argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero!'
                    }
                    return true;
                })
                .argv;

module.exports = argv;