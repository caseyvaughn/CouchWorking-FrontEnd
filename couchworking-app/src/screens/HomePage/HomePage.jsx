
import './Home.css';
import Display from '../../Display/Display'

export default function HomePage() {

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
