const express=require('express');
const chalk=require('chalk');
const path = require("path");
const bodyparser = require('body-parser');
const cors = require('cors');


var nav = [{
    link: "/",
    tittle: "Add Student"
},
{
    link: "/viewall",
    tittle: "View All"
},
{
    link: "/search",
    tittle: "Search"
},
{
    link: "/edit",
    tittle: "Edit"
},
{
    link: "/delete",
    tittle: "Delete"
}
];

var app = new express();

// const  addrouter= require('./src/routes/bookroute')(nav);
// const  viewallrouter= require('./src/routes/autherroute')(nav);
// const searchrouter = require('./src/routes/loginroute')(nav);
// const  editrouter= require('./src/routes/signup')(nav);
//const  deleterouter= require('./src/routes/signup')(nav);
app.use(bodyparser.json());
app.use(cors())
app.use(bodyparser.urlencoded({ extented: true })); /////to get value of form data
// app.use('/authers', autherroute);
// app.use('/books', bookrouter);
// app.use('/addbook', bookrouter);
// app.use('/login', singnuproutr)
// app.use('/signup', loginrouter);
app.get('/', function(res, res) {
    res.render('index', {
        nav: nav,
        tittle: "Library App"
    });
});

app.use(express.static(path.join(__dirname, "/public")));
app.set('views', './src/views');
app.set('view engine', 'ejs');

////set port 
app.listen(3000, function() {
    console.log(chalk.yellowBright(`port ${chalk.redBright("3000")} is active`));
});