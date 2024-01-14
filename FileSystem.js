const file = require('fs');

/*
//Read File - Async Function

file.readFile('./docs/file.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

*/

/*
//Write File

//it creates file if not already present in the specified directory
file.writeFile('./docs/file.txt', 'Hello, World', () => {
    console.log('File was written');
})

*/

/*
// directory
if(!file.existsSync('./assets')){

    file.mkdir('./assets', (err) => {
        if(err)
            console.log(err);
        else
            console.log("Directory Created");
    });
}else{
    file.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Directory Removed")
        }
    })
}

*/

//remove File

if(file.existsSync('./docs/deleteme.txt')){
    file.unlink('./docs/deleteme.txt', (err) => {
        if(err)
            console.log(err);
        else
            console.log("File Deleted");
    })
}

