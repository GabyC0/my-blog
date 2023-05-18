import express from "express";

let articlesInfo = [
  {
    name: "choosing-where",
    upvotes: 0,
    comments: [],
  },
  {
    name: "trip-planning",
    upvotes: 0,
    comments: [],
  },
  {
    name: "packing-essentials",
    upvotes: 0,
    comments: [],
  },
];

//creates new express app for us
const app = express();
//In order for body property to work correctly in express app we need to add middleware. When app receives json, parse it and return
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if(article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    } else {
        res.send("That article doesn't exist");
    }
});

app.post('/api/articles/:name/comments', (req, res) => {
    //format the comments are going to be specified in when sent to server as req
    //get both properties from request body
    const { postedBy, text } = req.body
});

//define endpoints and what you want server to do when an endpoint receives a request
//get request - takes 2 params. 1 - path we want to listen to 2 - callback (req object, resp object)
// app.get('/hello/:name', (req, res) => {
//     const { name } = req.params;
//     res.send(`Hello ${name}!!`);
// });

// app.post("/hello", (req, res) => {
//     //get access to info in request body.
//     res.send(`Hello ${req.body.name}!`);
// });

//tell our server to listen, func takes an argument to specify port it should listen on and a callback that will get called when server is listening
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

