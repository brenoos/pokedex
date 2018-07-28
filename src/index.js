import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './template/custom.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk)(createStore)(reducers, devTools)


ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
)
registerServiceWorker()
