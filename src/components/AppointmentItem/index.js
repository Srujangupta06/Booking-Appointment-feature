import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarImg, isImportant} = props
  const {title, date, id} = appointmentDetails

  const onClickStar = () => {
    toggleStarImg(id)
  }

  const formattedDate = date
    ? `Date: ${format(new Date(date), 'dd MMMM yyyy, EEEE')}`
    : ''

  const starImg = isImportant
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <>
      {title !== '' && date !== '' && (
        <li>
          <div className="container">
            <p className="card-title">{title}</p>
            <button type="button" onClick={onClickStar} data-testid="star">
              <img src={starImg} alt="star" />
            </button>
          </div>
          <p>{formattedDate}</p>
        </li>
      )}
    </>
  )
}
export default AppointmentItem
