import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>, document.getElementById('root'));
 