// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
