const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3000);