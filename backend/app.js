let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  //useNewUrlParser: true,
  //useFindAndModify: false,
  //useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const studentRoute = require('./routes/student.route')
const PCRoute = require('./routes/PC.route')

// Our express js ports
const nintendoRoute = require('./routes/nintendo.route')
const playstationRoute = require('./routes/playstation.route')

// This const is for student
// We need to add our own app var
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// RESTful API root
app.use('/api', studentRoute)
app.use('/api', PCRoute)



// This const is for nintendo
const nintendo = express();
nintendo.use(bodyParser.json());
nintendo.use(bodyParser.urlencoded({
  extended: false
}));
nintendo.use(cors());

// const for PlayStation
const playstation = express();
playstation.use(bodyParser.json());
playstation.use(bodyParser.urlencoded({
  extended: false
}));
playstation.use(cors());

// Setting up static directory
nintendo.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// RESTful API root
nintendo.use('/api', nintendoRoute)

// RESTful API root
playstation.use('/api', playstationRoute)




// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



// Nintendo PORT
const portNintendo = process.env.PORT || 8001;

nintendo.listen(portNintendo, () => {
  console.log('Connected to port ' + portNintendo)
})

// Find 404 and hand over to error handler
nintendo.use((req, res, next) => {
  next(createError(404));
});

// Index Route
nintendo.get('/', (req, res) => {
  res.send('invaild endpoint');
});

nintendo.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

// error handler
nintendo.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



// PlayStation PORT
const portPlayStation = process.env.PORT || 8004;

playstation.listen(portPlayStation, () => {
  console.log('Connected to port ' + portPlayStation)
})

// Find 404 and hand over to error handler
playstation.use((req, res, next) => {
  next(createError(404));
});

// Index Route
playstation.get('/', (req, res) => {
  res.send('invaild endpoint');
});

playstation.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

// error handler
playstation.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});