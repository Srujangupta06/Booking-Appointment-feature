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
  state = {
    appointmentList: initialAppointmentsList,
    title: '',
    date: '',
    onStarredBtn: false,
  }

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
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointmentItem],
      title: '',
      date: '',
    }))
  }

  toggleStarImg = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isImportant: !eachItem.isImportant}
        }
        return eachItem
      }),
    }))
  }

  onStarred = () => {
    const {appointmentList, onStarredBtn} = this.state
    this.setState({
      onStarredBtn: !onStarredBtn,
    })

    // if (onStarredBtn) {
    //   this.setState({
    //     appointmentList: appointmentList.filter(
    //       eachItem => eachItem.isImportant === true,
    //     ),
    //   })
    // } else {
    //   this.setState({
    //     appointmentList,
    //   })
    // }
  }

  render() {
    const {appointmentList, title, date, onStarredBtn} = this.state
    let filteredAppointments = [...appointmentList]
    if (onStarredBtn) {
      filteredAppointments = filteredAppointments.filter(
        eachItem => eachItem.isImportant === true,
      )
    }
    return (
      <div className="bg-container">
        <div className="appointment-container">
          <div className="appointment-card-container">
            <div className="text-container">
              <h1 className="main-heading">Add Appointment</h1>
              <form onSubmit={this.onBookAppointment}>
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
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
                className="main-img"
              />
            </div>
          </div>
          <hr />
          <div className="booked-appoinments-container">
            <div className="starred-appoinments-container">
              <h1>Appointments</h1>
              <button type="button" onClick={this.onStarred}>
                Starred
              </button>
            </div>
            <ul>
              {filteredAppointments.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  isImportant={eachItem.isImportant}
                  appointmentDetails={eachItem}
                  toggleStarImg={this.toggleStarImg}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
