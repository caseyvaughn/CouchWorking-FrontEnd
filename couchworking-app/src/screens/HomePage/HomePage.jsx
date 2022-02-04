import './HomePage.css';
import Display from '../../components/Display/Display';



export default function HomePage(props) {

  return (
    <div>
        <Display user={props.user}>
        <div className="home-container">
          
        </div>
        </Display>
    </div>
  )
}
