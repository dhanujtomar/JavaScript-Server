const fs = require('fs');

const readStream = fs.createReadStream('./docs/doc.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('docs/doc2.txt');

let count = 0;

readStream.on('data', (chunk)=>{
    console.log("------------------------------------New Chunk------------------------------------");
    console.log(chunk);
    console.log("------------------------------------Chunk End------------------------------------");
    console.log(count++);

    //writeStream.write("kuch bhi");
})

//piping
readStream.pipe(writeStream);