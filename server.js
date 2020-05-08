const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 3000;
const app = express();
const api = require('./routes/api')

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads'));
app.use('/api',api);

app.get('/', function(req,res){
    res.send("Hello Server");
});

app.listen(PORT, function () {
    console.log('Server running ' + PORT);
})

