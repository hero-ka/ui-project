import Iccon from '../Icon/Icon';
import '../csshomepage/header.css';

function Header() {
  return (
    <div className="header-wrapper">
        
      <img className="header-image" src="/img/image.png" alt="Fashion" />
      {/* <div className="icon-small-star">
      <Iccon icon="smallStar"/>
      </div>
      <div className="icon-big-star">
      <Iccon icon="bigstar"/>
      </div>     */}
      <div className="header-content">
        <h1 className="header-title">
          <span>FIND CLOTHES</span>
          <span>THAT MATCHES</span>
          <span>YOUR STYLE</span>
        </h1>
        <h6 className="header-subtitle">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </h6>
        <button className="header-button">Shop Now</button>
        <div className="stats">
          <div className="stat-item">
            <h2 className='h2-h'>200+</h2>
            <p>International Brands</p>
          </div>
          
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className='h2-h'>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
         
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2 className='h2-h'>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;