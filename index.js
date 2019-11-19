const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Waiters = require('./waiter');
const Routes = require('./routes');
const flash = require('express-flash');
const session = require('express-session');
const pg = require('pg');
const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://sesh:pg123@localhost:5432/waiter_app';

const pool = new Pool({
  connectionString,
  ssl: useSSL
});

let waiterDays = Waiters(pool);
let route = Routes(waiterDays)
app.use(session({
  secret: "<add an alert message>",
  resave: false,
  saveUninitialized: true
}));
app.use(flash())

app.use("**/css", express.static("public/css"))
var exphbs = require('express-handlebars');

const handlebarSetup = exphbs({
  partialsDir: "./views/partials",
  viewPath: './views',
  layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', route.index)
let PORT = process.env.PORT || 3015;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});