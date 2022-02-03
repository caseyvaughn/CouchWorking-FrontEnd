
import './HomePage.css';
import Display from '../../components/Display/Display';

export default function HomePage(props) {

  return (
    <div>
        <Display user={props.user}>
        <div className="home-container">
            <button></button>
            <button></button>
        </div>
        </Display>
    </div>
  )
}
