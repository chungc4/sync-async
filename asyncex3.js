var fs = require('fs');

console.log("Starting reading");

fs.readFile('input.txt', (err,data)=>{
    if (err) return console.log(err);
    console.log(data.toString());
    console.log("Reading Finished");
    console.log("Beging Appending");
    fs.appendFile('input.txt', ' Hello Friend!', (err)=>{
        if (err) throw err;
        console.log("Appending Done");
        fs.readFile('input.txt', (err, data)=>{
            console.log(data.toString());
            console.log("re-read finish");
        })

    })
});


