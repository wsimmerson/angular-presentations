var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("./show"));

app.listen(5000);
console.log('slide show running on port 5000');
