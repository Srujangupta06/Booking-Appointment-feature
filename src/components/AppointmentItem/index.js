import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date, id} = appointmentDetails
  return (
    <li>
      <div className="container">
        <h1>{title}</h1>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="star-img"
          />
        </button>
      </div>
      <p>Date : {date}</p>
    </li>
  )
}
export default AppointmentItem
