import amazonIcon from '../../Amazon icon.jpg'
import '../App.css'
import '../index.css'
import {Bookmark} from 'lucide-react';
const Card = (props)=> {
    return (
         <div className='card'>
          <div className="top">
          <img src={amazonIcon} alt="Amazon logo" />
          <button>Save <Bookmark /></button>
          </div> 
          <div className='center'>
            <h3>{props.company}<span>5 Days ago</span></h3>
            <h2>{props.post}</h2>
            <div>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className='bottom'>
            <div>
                <h3>{props.pay}</h3>
                <p>{props.loc}</p>
            </div>
              <button>Apply Now</button>
          </div>
         </div>
    )
}

export default Card;