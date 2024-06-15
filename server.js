/* const http = require("http");

http.createServer(function(req, res){
    res.write("Hello, world!");
    res.end();
    console.log("Server running")
}).listen(3000); */

const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    // send {message: "Hello, world!"} back to the client

    res.json({
        msg: "Hello world"  // the object maps string to string
    }); 

    // what is the difference between res.send and res.json?
    // res.send sends a string back to the client while res.json ...
    // ... sends a JSON object back to the client
});

app.get("/echo/:id", (req, res) => {
    res.json({
        id: req.params.id

/*         Or:
    const response = {
        id: req.params.id
    };
    res.send(response);
*/
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });