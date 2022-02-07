import './Footer.css';

const Footer = () => {

    return (  
        <div className="main-footer">
          <h4 className="footer-header">Contact Us</h4>
          <div className="row">
            <div className="col">
              <h4>LinkedIn</h4>
              <ul className="list-unstyled">
                    <a className="social-link" href="http://www.linkedin.com/in/trungdiec">Trung</a>
                    <a className="social-link" href="https://www.linkedin.com/in/cvaughn555/">Casey</a>
                    <a className="social-link" href="www.linkedin.com/in/blake-weinmann">Blake</a>
                    <a className="social-link" href="https://www.linkedin.com/in/timhausweiler/">Tim</a>
              </ul>
            </div>
            <div className="col">
              <h4>Github</h4>
              <ul className="list-unstyled">
                    <a className="social-link" href="https://github.com/tdiec00">Trung</a>
                    <a className="social-link" href="https://github.com/caseyvaughn">Casey</a>
                    <a className="social-link" href="https://github.com/bweinmann">Blake</a>
                    <a className="social-link" href="https://github.com/timhausweiler">Tim</a>
              </ul>
            </div>
            <div className="col">
              <h4>Portfolio</h4>
              <ul className="list-unstyled">
                    <a className="social-link" href="/">Trung</a>
                    <a className="social-link" href="/">Casey</a>
                    <a className="social-link" href="/">Blake</a>
                    <a className="social-link" href="/">Tim</a>
              </ul>
            </div>
          </div>
      </div>
    )
}

export default Footer;

