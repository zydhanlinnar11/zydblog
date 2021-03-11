import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

function NotAvailable({ text }) {
  return (
    <div className="icon-only-div">
      <FontAwesomeIcon className="middle-icon" icon={faBan} />
      <h4 className="middle-text">{text}</h4>
    </div>
  )
}

export default NotAvailable
