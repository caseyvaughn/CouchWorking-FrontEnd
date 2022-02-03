import './Display.css'
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Display = (props) => {
  return (
    <div className="page-display">
        <Navbar user={props.user} />
        <div className="display-content">
            {props.children}
        </div>
        <Footer />
    </div>
)}

export default Display;
