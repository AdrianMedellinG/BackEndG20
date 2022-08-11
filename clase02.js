/*
const colors = require('colors');

const arcoiris = (texto) =>{
    return texto.rainbow
}
console.log(arcoiris(process.argv[2])); // rainbow
*/

/*
const fs = require('fs');
const colors = require('colors');

fs.writeFile('message.txt', 'texto de data', 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!'.red);
  });
*/

//! Tarea
const fs = require('fs');
//console.log("fs",fs.readFile)

fs.readFile("message.txt","utf8", (err, data)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log("data",data)
    }
})

 