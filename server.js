const express = require('express');
const cors = require('cors');

const app = express();

//enabiling Cors
app.use(cors());

const port = 4865;

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})