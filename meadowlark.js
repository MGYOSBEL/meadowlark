var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
.create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('viewengine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// CUSTOM HOME PAGE
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

// CUSTOM ABOUT PAGE
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About Meadowlark');
});
// CUSTOM 404 PAGE
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page Not Found');
});

// CUSTOM 500 PAGE
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:'+app.get('port')+ ' press Ctrl+C to terminate.');
});