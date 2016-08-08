import React from 'react'
import Modal from 'react-modal'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Datepicker extends React.Component {
  constructor() {
    super()
    this.state = {modalIsOpen: false}
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({modalIsOpen: true})
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
        >
          <button onClick={this.closeModal}>close</button>
          <DayPicker
            initialMonth={ new Date(2016, 1) }
          />
        </Modal>
      </div>
    )
  }
}

export default Datepicker