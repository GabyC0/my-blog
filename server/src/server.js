import express from "express";
import { db, dbConnection } from './db.js';

//creates new express app for us
const app = express();
//In order for body property to work correctly in express app we need to add middleware. When app receives json, parse it and return
app.use(express.json());

//allows our client side to load info for given article

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;

  //connect to mongodb and make query pass url of our mongo db 
  //const client = new MongoClient('mongodb://127.0.0.1:27017');
  //have client connect
  //await client.connect();

  //get specific db 
  //const db = client.db('react-blog-db');

  //query to load article by name
  const article = await db.collection('articles').findOne({ name });

  //if article doesn't exist
  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }

  //test by sending article back to client
  res.json(article);
});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    //const client = new MongoClient('mongodb://127.0.0.1:27017');
    //await client.connect();

    //const db = client.db('react-blog-db');
    //to update article of name param and increment by 1
    await db.collection('articles').updateOne({ name }, {
      $inc: { upvotes: 1},
    });
    //to load articles
    const article = await db.collection('articles').findOne({ name });

    if(article) {
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    } else {
        res.send("That article doesn't exist");
    }
});

app.post('/api/articles/:name/comments', async (req, res) => {
    //format the comments are going to be specified in when sent to server as req
    //get both properties from request body
    const { name } = req.params;
    const { postedBy, text } = req.body;

    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');

    await db.collection('articles').updateOne({ name }, { $push: { comments: { postedBy, text } }});

    const article = await db.collection('articles').findOne({ name });
    
    if (article) {
        res.send(article.comments);
    } else {
        res.send("That article doesn't exist!");
    }
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

dbConnection(() => {
  console.log('Successfully connected to database');
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  })
})
