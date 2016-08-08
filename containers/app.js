import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ContactForm from './contact_form'
import DatepickerContainer from './datepicker'

class App extends Component {
	render() {
		return (
			<div>
				{/*<ContactForm />*/}
				<DatepickerContainer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(
	mapStateToProps,
)(App)