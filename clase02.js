
const colors = require('colors');
const fs = require('fs');
/*
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

/* //! Tarea 02
const fs = require('fs');
//console.log("fs",fs.readFile)

fs.readFile("message.txt","utf8", (err, data)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log("data",data)
    }
})
*/

//! Actualizar Archivo
/*
fs.appendFile('message.txt', 'texto de data', 'utf8', (err) => {
    if (err){
        console.log("err",err);
        return
    }
    console.log('The updated sucessfully!'.red)
});
*/


/* //! Eliminar Archivo
fs.unlink('message.txt', (err) => {
    if (err){
        return
    }
    console.log('message.txt was deleted');
  });
  */



/*//! Practica de elimirar directorio
const directorio = "directorio1"
fs.readdir(directorio, (err, data) => {
    if (err) throw err;
    //console.log(data.length);
    if (data.length > 0) {
        //console.log(data[0])

        data.forEach((cv) => {
            fs.unlink(directorio+"/"+cv, (err) => {
                if (err) {
                    return
                }
                console.log(`Se elimino el archivo ${cv}`.red)
            });
        });
        console.log("Se eliminaron todo los archivos".red)
    }


});
*/

const directorio = "directorio1"



fs.readdir(directorio, { withFileTypes: true }, (error, files) => {
    const subdirecotires = files
        .filter((item) => item.isDirectory())
        .map((item) => item.name);
    //console.log(subdirecotires);
    if(subdirecotires.length > 0){
        subdirecotires.forEach((cv) => {
            fs.unlink(directorio+"/"+subdirecotires+"/"+cv, (err) => {
                console.log(`${directorio}/${subdirecotires}/${cv}`)
                if (err) {
                    console.log(`Se elimino el archivo ${cv}`.red)
                }
             
            });
            console.log(`Se eliminaron todo los archivos de la carpeta ${cv}`.red)
        });
       
    }

 })

// fs.readdir(directorio, (err, data) => {
//     if (err) throw err;
//     console.log(data);


// })