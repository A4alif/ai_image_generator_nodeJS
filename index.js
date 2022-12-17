const express = require('express');
const path = require('path')
const openaiRoutes = require('./routes/openaiRoutes')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;


const app = express();
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', openaiRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})