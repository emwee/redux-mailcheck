import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import MailCheck from 'react-mailcheck'

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <MailCheck email={this.props.fields.email.value}>
            {suggestion => (
              <div>
                <input
                  type="email"
                  value={this.props.fields.email.value}
                  onChange={(e) => { this.props.fields.email.onChange(e.target.value) }}
                />
                {suggestion &&
                  <div>
                    Did you mean {suggestion.full}?
                  </div>
                }
              </div>
            )}
          </MailCheck>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    fields: ['email'],
  }
}

ContactForm = reduxForm({
  form: 'contact'
}, mapStateToProps)(ContactForm)

export default ContactForm