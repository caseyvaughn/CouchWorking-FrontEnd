import './HomePage.css';
import Display from '../../components/Display/Display';
import {Link} from 'react-router-dom'



export default function HomePage(props) {

  return (
    <div>
        <Display user={props.user}>
        <div className="home-container">
          <div className="home-container-left">
          <button className="home-button-left">
          Host a Couch
          </button>  
         </div>
         <div className="home-container-right">
            <button className="home-button-right">
            Find a Couch
            </button> 
          </div>
        </div>
        </Display>
    </div>
  )
}
