import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Auth0Provider } from "@auth0/auth0-react"


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

//  <Auth0Provider
//   domain="dev-tfnpscit.auth0.com"
//   clientId="L0rd9FIn7Sx4jvzvqCxKujVBPY3t4dCc"
//   redirectUri={'http://localhost:3000/home'}
//   >
// </Auth0Provider>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
