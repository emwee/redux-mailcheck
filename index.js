import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/app'

const middleware = [ thunk ]

const store = createStore(
	reducer,
	compose(
		applyMiddleware(
			...middleware
		)
	)
)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)