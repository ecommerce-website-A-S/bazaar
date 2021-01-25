var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var path = require('path')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const http = require("http");
const bcrypt = require("bcrypt");
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      // expires: 60 * 60 * 24,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + "/../react-client/dist"));
var MyDataBase  = mysql.createPool({
  host :'us-cdbr-east-02.cleardb.com',
      user: 'bd50aba9b49a3d',
      password:'a93c1eef',
      database:'heroku_af8b3edbbdd529b'
    });
    //updates our database
    app.put("/update", function(req, res) {
      console.log(req)
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const ItemId = req.body.userId;
    const id = req.body.id
    const image = req.body.image
    MyDataBase.query(
      "UPDATE items SET  title = ?,description = ?, category = ?,userId =? ,image=?  WHERE id=? ",
      [title, description, category,ItemId,image,id],
      (err, result) => {
        if (err) console.log(err);
       }
      )
      res.send("result");
       });
      //insert my items into the database
      app.post('/insert', (req, res) => {
      const Title=req.body.title;
      const Description=req.body.description;
      const Category= req.body.category;
      const Image = req.body.image
      const Userid= req.body.userId;
      MyDataBase.query("INSERT INTO items (title,description,category,image,userId) VALUES (?,?,?,?,?)", [Title , Description , Category,Image,Userid],(err,result)=>{
       console.log(err);
      } ) })
//return all items
      app.get("/Items1", (req, res) => {
       MyDataBase.query("SELECT * FROM items", function (err, result, fields) {
      if (err) throw err
      else
      res.send(result)
      });  })
//sign up
app.post("/SignUp1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    MyDataBase.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
//delete item
app.delete('/delete1:id',(req,res) => {
    console.log(req.params.id);
    MyDataBase.query('DELETE FROM `items` WHERE `id`=?', [req.params.id], function (error, results, fields) {
      console.log("deleeted from database")
      if (error) throw error;
      res.end('Record has been deleted!');
    });
   });
    //gets all the data in the databse
   app.get ('/profile1',function(req,res){
            MyDataBase.query("SELECT * FROM users;",function (err, result, fields) {
              if (err) throw err
              else
              res.send(result)
             } )})
       app.post("/signIN1", (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const id = req.body.id;
      //checks the database
      MyDataBase.query(
      "SELECT * FROM users WHERE email = ?;",
        email,
        (err, result) => {
         if (err) {
        res.send({ err: err });
      }
         if (result.length > 0) {
           //check the bycrypted password
          bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
               req.body.id = result[0].id
               //creates the token
              const token = jwt.sign({id},"jwtSecret", {
              expiresIn:1000,
            })
              //creates my session
            req.session.user =  {auth:true,token: token, result: result}
            res.json({auth:true,token: token, result: result});
            }
            else {
            res.json({auth:false, message:'wrong password '});
              }
            });
            }
            else {
            res.json({auth:false, message:'no user'});
           }
           }
           );
            });
      app.get("/signIN1", (req, res) => {
      res.send( req.session.user );
      }
      );
      app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
        if (err) {
       res.status(500).send(err)
        }
       })
      })
    app.listen(3000, function() {
    console.log('listening on port 3000!');
    });