const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Oruko',
  password: 'Ibokolo22',
  database: 'humanitarianaid',
  port: 3000
});

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }

  console.log('Connected to database as id ' + connection.threadId);
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  var contactInfo = {
    name: 'Oruko',
    email: 'asmanabduloruko@gmail.com',
    phone: '0759469377',
    address: 'silanga'
  };
  res.render('contact', { contactInfo: contactInfo });
});

app.get('/Donate', (req, res) => {
  var makeDonation = {
    name: '',
    email: '',
    amount: ''
  };
  res.render('donate', { makeDonation: makeDonation });
});



app.get('/Recent Projects', (req, res) => {
  var recentProjects = {
    project: '',
    project2: '',
    project3: '',
  };
  res.render('view_Recent_Projects', { viewRecentProjects: RecentProjects });
});



// Define the port to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}/`);
});
