const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err) {
    if (err) {
        console.log(`Error is running in the server: ${err}`);
    }
    console.log(`Server running successfully at: ${port}`);
})