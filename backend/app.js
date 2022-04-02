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
const xboxRoute = require('./routes/xbox.route')

// This const is for student
// We need to add our own app var
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

const PC = express();
PC.use(bodyParser.json());
PC.use(bodyParser.urlencoded({
  extended: false
}));
PC.use(cors());

// This const is for nintendo
const nintendo = express();
nintendo.use(bodyParser.json());
nintendo.use(bodyParser.urlencoded({
  extended: false
}));
nintendo.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));
PC.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// RESTful API root
app.use('/api', studentRoute)
PC.use('/api', PCRoute)
nintendo.use('/api', nintendoRoute)



// This const is for xbox
const xbox = express();
xbox.use(bodyParser.json());
xbox.use(bodyParser.urlencoded({
  extended: false
}));
xbox.use(cors());

// Setting up static directory
xbox.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// RESTful API root
xbox.use('/api', xboxRoute)





// Setting up static directory
nintendo.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// RESTful API root
nintendo.use('/api', nintendoRoute)


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

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



//PC ports---------------------------
const PCport = process.env.PORT || 8003;

PC.listen(PCport, () => {
  console.log('Connected to port ' + PCport)
})

// Find 404 and hand over to error handler
PC.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Index Route
PC.get('/', (req, res) => {
  res.send('invaild endpoint');
});

PC.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

PC.use((req, res, next) => {
  next(createError(404));
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

// Xbox PORT
const portXbox = process.env.PORT || 8002;

xbox.listen(portXbox, () => {
  console.log('Connected to port ' + portXbox)
})

// Find 404 and hand over to error handler
xbox.use((req, res, next) => {
  next(createError(404));
});

// Index Route
xbox.get('/', (req, res) => {
  res.send('invaild endpoint');
});

xbox.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

// error handler
xbox.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});