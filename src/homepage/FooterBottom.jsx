import '../csshomepage/FooterBottom.css'
import Iccon from '../Icon/Icon';
import { useLocation } from 'react-router-dom';
function FooterBottom(){
      const location = useLocation();
  const IsChekedOut = location.pathname==="/detail"
    return(
        <>
           <div  className={`footer-bottom-container ${IsChekedOut ? 'footer-b':''}`}>
            <h1 className='fb-h1'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className="search-box">
                <div className='icon-email'>
                <Iccon icon="email" />
                </div>
           
            <input
            type="text"
            placeholder="Enter your email address"
            className="email-input"
          />
          <button className='fb-btn'>Subscribe to Newsletter</button>
        </div>
           </div>


        </>
    )
}
export default FooterBottom;