
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

/*//! Practica de eliminar archivos y carpoetas dentro de una carpeta
let folder = "directorio1"
fs.readdir(folder,"utf-8",(err,files)=>{
    if(err)throw err;
    if(files.length == 0){
        console.log("No hay archivos");
        return;
    }
    files.forEach((file)=>{
        if(fs.statSync(`${folder}/${file}`).isDirectory()){
            fs.rm(`${folder}/${file}`,{recursive:true,force:true},(err)=>{
                if(err)throw err;
                console.log(`Directorio ${file} eliminado`);
            });
       }
        else{
              fs.unlink(`${folder}/${file}`,(err)=>{
              if(err)throw err;
              console.log(`Archivob ${file} eliminado`);
            });
        }
    });

});
*/