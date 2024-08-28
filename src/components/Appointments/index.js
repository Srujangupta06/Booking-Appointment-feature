import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentsList = [
  {
    id: uuidv4(),
    title: '',
    date: '',
    isImportant: false,
  },
]
class Appointments extends Component {
  state = {title: '', date: '', appointmentList: initialAppointmentsList}

  onAddTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onAddDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onBookAppointment = event => {
    const {title, date} = this.state
    event.preventDefault()
    const newAppointmentItem = {
      id: uuidv4(),
      title,
      date,
      isImportant: false,
    }
    this.setState(prevState => {
      return {
        appointmentList: [...prevState.appointmentList, newAppointmentItem],
        title: '',
        date: '',
      }
    })
  }

  render() {
    const {appointmentList} = this.state
    const {title, date} = appointmentList
    return (
      <div className="bg-container">
        <div className="appointment-container">
          <div className="appointment-card-container">
            <div>
              <h1 className="main-heading">Add Appointment</h1>
              <form>
                <div>
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    onChange={this.onAddTitle}
                    value={title}
                  />
                </div>
                <div>
                  <label htmlFor="date">DATE</label>
                  <input
                    type="date"
                    id="date"
                    onChange={this.onAddDate}
                    value={date}
                  />
                </div>
                <button
                  type="submit"
                  className="add-button"
                  onSubmit={this.onBookAppointment}
                >
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="main-image"
                className="main-img"
              />
            </div>
          </div>
          <hr />
          <div className="booked-appoinments-container">
            <div className="starred-appoinments-container">
              <h1>Appointments</h1>
              <button type="button">Starred</button>
            </div>
            <ul>
              {appointmentList.map(eachAppointmentItem => {
                ;<AppointmentItem
                  appointmentDetails={eachAppointmentItem}
                  key={eachAppointmentItem.id}
                />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
