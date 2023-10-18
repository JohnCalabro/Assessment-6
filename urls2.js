const fs = require('fs');
const axios = require('axios');

fs.readFile('urls.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        process.kill(1) 
    } else {
        const lines = data.split("\n");
        console.log(lines)
        
        lines.map((line) => {
            console.log('MAPPED', line)
            axios.get(line).then((res) => {
               
                let filePath;
                const html = res.data;

                if(line === 'http://rithmschool.com') filePath = 'rithmschool.com.text'
                if(line === 'http://postgresql.com') filePath = 'postgresql.com.text'
                if(line === 'http://foozlemcblargh.com') filePath = 'foozlemcblargh.com.text'
                if(line === 'https://nodejs.org/api/console.html') filePath = 'nodejs.org.text'
                
                fs.writeFile(filePath, html, (err) => {
                    if (err) throw err;
                    console.log('Data has been written to the file successfully.');
                    });


            }).catch((err) => {
                console.log(`${err} error, but continue on with the rest of the script.`) 
            })
        })

    }
})








            
              