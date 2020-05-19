const express = require('express');
const app = express();

const routes = require('./routes/index');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index.ejs');
});
// mount public api v1 routes
app.use('/doc', routes);

console.log('Server Started');
app.listen(3333);
