import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root.js';
import registerServiceWorker from './registerServiceWorker';
const json = require('./resume.json');

ReactDOM.render(<Root jsonObj={json}/>, document.getElementById('root'));
registerServiceWorker();
