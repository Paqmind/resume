import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './components/Root'
import './index.css'
const json = require('./resume.json')

ReactDOM.render(<Root jsonObj={json}/>, document.getElementById('root'))
registerServiceWorker()
