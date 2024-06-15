/* const http = require("http");

http.createServer(function(req, res){
    res.write("Hello, world!");
    res.end();
    console.log("Server running")
}).listen(3000); */

const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json()); // middleware to parse JSON
app.use(router); // use the router

router.get("/hello", (req, res) => {
    // send {message: "Hello, world!"} back to the client

    res.json({
        msg: "Hello world"  // the object maps string to string
    }); 

    // what is the difference between res.send and res.json?
    // res.send sends a string back to the client while res.json ...
    // ... sends a JSON object back to the client
});

router.get("/echo/:id", (req, res) => {
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

router.post("/sum", (req, res) => {
    try {
        const numbers = req.body.numbers;
        let sum = 0;
        numbers.forEach(number => {
            sum += number;
        });
        res.json({
            sum: sum
        });
    } catch (error) {    
        res.status(400).json({
            msg: "Invalid request"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });