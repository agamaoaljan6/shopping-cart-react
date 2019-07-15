import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'; // importing the counter class from the jsx file 

ReactDOM.render(<Counters />, document.getElementById('root'));
serviceWorker.unregister();
