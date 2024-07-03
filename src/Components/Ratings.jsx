import {PropTypes} from 'prop-types'
import icon from '../assets/images/icon-star.svg'
import Rate from './Rates'
import { getCurrentRate } from '../scripts/rate';

export default function ratings(props){
  return(
    <div className="rating-container">
      <img src={icon} alt="icon" className="icon" />
      <div className="Rating-Content">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="ratings-icons">
          <Rate rate="1"/>
          <Rate rate="2"/>
          <Rate rate="3"/>
          <Rate rate="4"/>
          <Rate rate="5"/>
        </div>
        <button onClick={()=>props.submit(getCurrentRate())}>SUBMIT</button>
      </div>
    </div>
  )
}

ratings.propTypes ={
  submit: PropTypes.func
}

