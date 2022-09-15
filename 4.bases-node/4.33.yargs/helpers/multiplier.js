const fs = require('fs');
const colors = require('colors');

//Async, por defecto regresa una promesa
const createFile = async(base = 5, list, endNum) =>{      

    let init = 1;
    //let fin = 10;
    let fin = endNum;
    let output = `|==========================|
|    Tabla del ${base}           |
|==========================|\n`;

    let  consoleOutput = `|==========================|
|    Tabla del ${colors.green(base)}            |
|==========================|\n`;

    for(let i = init; i <= fin; i++){

        output += `${base} X ${i} = ${base*i} \n`;
        consoleOutput += `${base} ${'X'.bgBlue} ${i} ${'='.yellow} ${base*i} \n`;

    }

    if(list)
        console.log(consoleOutput);

    try{  

        fs.writeFileSync(`./output/tabla-del-${base}.txt`, output);

    }catch(err){
        throw err;
    }

}

module.exports = {createFile};