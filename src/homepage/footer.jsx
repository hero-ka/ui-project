// import '../css/footer.css';
import '../csshomepage/footer.css'
import Iccon from '../Icon/Icon';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const IsChekedOut = location.pathname==="/detail"
  return (
    <div className={`f-container ${IsChekedOut ? 'footer-alt':''}`}>
      <div className="f-detail">
        <div className="f-left">
          <h1 className="f-h1">SHOP.CO</h1>
          <p className="f-desc">
            We have clothes that suit your style and which you’re proud to wear. From women to men
          </p>
          <div className="f-icons">
            <div className="icon-box"><Iccon icon="github" /></div>
            <div className="icon-box"><Iccon icon="instagram" /></div>
            <div className="icon-box"><Iccon icon="fasebook" /></div>
            <div className="icon-box"><Iccon icon="bird" /></div>
          </div>
        </div>

        <div className="f-links">
          <ul>
            <span>Company</span>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
          <ul>
            <span>Help</span>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <span>FAQ</span>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
          <ul>
            <span>Resources</span>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <hr className="f-line" />

      <div className="f-bottom">
        <h2 className="f-copy">Shop.co © 2000-2023, All Rights Reserved</h2>
        <div className="f-payments">
          <Iccon icon="visa" />
          <Iccon icon="twocircle" />
          <Iccon icon="poypal" />
          <Iccon icon="apple" />
          <Iccon icon="googleplay" />
        </div>
      </div>
    </div>
  );
}

export default Footer;