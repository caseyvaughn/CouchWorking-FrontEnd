import './HomePage.css';
import Display from '../../components/Display/Display';



export default function HomePage(props) {

  return (
    <div>
        <Display user={props.user}>
        <div className="home-container">
          <div className="home-container-left">
          <button className="home-button">
          <img className="home-image-left"
            src = {require("../../assets/Living room1-01.jpg")}
            alt = "Interior Modern living room with furniture. Flat design Vector Illustration Vectors by Vecteezy"></img>
          </button>  
         </div>
         <div className="home-container-right">
            <button className="home-button">
          <img className="home-image-right"
            src = {require("../../assets/My project.jpg")}
            alt = "man on couch"></img>
            </button> 
          </div>
        </div>
        </Display>
    </div>
  )
}
