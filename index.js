const express = require('express');
const openaiRoutes = require('./routes/openaiRoutes')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;

const app = express();

app.use('/openai', openaiRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})