import './HomePage.css';
import Display from '../../components/Display/Display';
import {Link} from 'react-router-dom'



export default function HomePage(props) {

  return (
    <div>
        <Display user={props.user}>
        <div className="home-container">
          <div className="home-container-left">
            <Link to="/sign-in">
          <button className="home-button-left">
          Host a Couch
          </button>  
          </Link>
         </div>
         <div className="home-container-right">
         <Link to="/couches">
            <button className="home-button-right">
            Find a Couch
            </button> 
          </Link>
          </div>
        </div>
        </Display>
    </div>
  )
}
