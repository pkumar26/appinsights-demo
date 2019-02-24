'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const appInsights = require('applicationinsights');
appInsights.setup();
appInsights.defaultClient.context.tags[appInsights.defaultClient.context.keys.cloudRole] = "HelloWorld-ACI";
appInsights.start();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World with App Insights!!\n');
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);