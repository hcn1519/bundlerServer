const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/download', function(req, res){
  res.setHeader('content-type', 'text/javascript');
  var file = __dirname + '/download/main.jsbundle';
  res.download(file); // Set disposition and send it.
});
