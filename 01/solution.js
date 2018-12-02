const fs = require('fs') 

fs.readFile('Input.txt', 'utf-8', (err, data) => { 
    if (err) throw err;
    dataSet = data.split("\n");
    result = 0;
    dataSet.map(frequency =>{
        if (frequency[0] === "+")
        {
            result+= parseInt(frequency.substr(1));
        }
        else{
            result-= parseInt(frequency.substr(1)); 
        }
    });
    
    console.log(result);
})



