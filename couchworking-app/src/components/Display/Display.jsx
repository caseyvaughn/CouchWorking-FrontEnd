import './Display.css'
import Navbar from '../Nav/Nav';
import Footer from '../../Footer/Footer';

const Display = () => {
    <div className="page-display">
        <Navbar user={props.user} />
        <div className="display-content">
            {props.children}
        </div>
        <Footer />
    </div>
}

export default Display;
