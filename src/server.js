const express = require('express');
const routes = require('../routes');
const app = express();

app.use(routes);

app.listen(process.env.listen || 3000);