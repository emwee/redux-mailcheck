import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactForm from './contact_form'

class App extends Component {
	render() {
		return (
			<ContactForm />
		)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(
	mapStateToProps,
)(App)