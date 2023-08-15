const express = require('express');
const app = express();
const cors = require('cors');
const videoRoute = require('./routes/videos.js')
require('dotenv').config();
const {CORS_ORIGIN} = process.env;
const PORT = process.env.PORT || 5050;

app.use(cors({origin: CORS_ORIGIN}));
app.use(express.json());
app.use(express.static('public'));
app.use("/videos", videoRoute);

app.listen(PORT, () => {
    console.log('listening', PORT);
})
