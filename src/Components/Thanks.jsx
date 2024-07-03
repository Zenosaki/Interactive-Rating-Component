import icon from '../assets/images/illustration-thank-you.svg'
import {PropTypes} from 'prop-types'


export default function thank(props){
  return(
    <div className="thank-container">
      <img src={icon} alt="img" />
      <h5>You selected {props.rated} out of 5</h5>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. <br /> If you ever need more support, don&apos;t hesitate to <br /> get in touch!</p>
    </div>
  )
}

thank.propTypes ={
  rated: PropTypes.string
}

