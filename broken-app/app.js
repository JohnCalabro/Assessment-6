const express = require('express');
let axios = require('axios');
const app = express(); //changed from var to const

app.use(express.json());  //this was missing. 


app.post('/test', (req, res) => {
  console.log(req.body)
  return res.json(req.body)   
})




app.get('/test2', function (req, res) {
  

  res.json({"test" : "ok"})
})

app.post('/users', async function(req, res, next) {
  
  console.log(req.body.developers)
  try {
    
    let promises = req.body.developers.map(async d => { 
      return axios.get(`https://api.github.com/users/${d}`);
                                                          // ^ takes an id
    });
    const results = await Promise.all(promises)
    console.log(results)
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));  // name is undefined
    console.log(`OUTPUT: ${out}`)
    return res.send(JSON.stringify(out));
    // return res.json(out)
  } catch (err) {   // did not pass in err
    console.log(`ERROR: ${err}`)   //ERROR: TypeError: Cannot read properties of undefined (reading 'developers')
    next(err);
  }
});


// app.listen(3000);

app.listen(3000, () => {
  
  console.log('Server running on port 3000')
});




// peError: Cannot read properties of undefined (reading 'name')
//     at /Users/johncalabro/Downloads/node-express-1/broken-app/app.js:32:48
//     at Array.map (<anonymous>)
//     at /Users/johncalabro/Downloads/node-express-1/broken-app/app.js:32:23
//     at Layer.handle [as handle_request] (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/route.js:144:13)
//     at Route.dispatch (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/route.js:114:3)
//     at Layer.handle [as handle_request] (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/layer.js:95:5)
//     at /Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/index.js:284:15
//     at Function.process_params (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/index.js:346:12)
//     at next (/Users/johncalabro/Downloads/node-express-1/broken-app/node_modules/express/lib/router/index.js:280:10)




