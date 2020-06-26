import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const express = require('express');
// const bodyParser = require('body-parser');
// const usersRouter = require('./Database/routers/users')

// const app = express();
// const port = process.env.PORT || 4001;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// app.listen(port, () => {
//   console.log(`Web server is listening on port ${port}!`)
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
