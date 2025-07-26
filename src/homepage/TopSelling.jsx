import '../csshomepage/topselling.css'
import Iccon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';

function Topselling() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container">
      <h1>TOP SELLING</h1>
      <div className="product-list">
        <div className="product">
          <img className='product-image' onClick={() => handleClick("verticalShirt")} style={{ cursor: "pointer" }} src="/img/verticalShirt.png" alt="verticalShirt" />
          <h1 className='product-title'>VERTICAL STRIPED SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$185.6</span>
            <span className='price-old'>$232</span>
            <span className='discount-badge'>-20%</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("graphicTshirt")} style={{ cursor: "pointer" }} src="/img/graphicTishrt.png" alt="graphicTshirt" />
          <h1 className='product-title'>COURAGE GRAPHIC T-SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$145</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("bermuda")} style={{ cursor: "pointer" }} src="/img/bermodaShorts.png" alt="bermodaShorts" />
          <h1 className='product-title'>LOOSE FIT BERMUDA SHORTS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$80</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("fadedJeans")} style={{ cursor: "pointer" }} src="/img/fadedHeans.png" alt="fadedJeans" />
          <h1 className='product-title'>FADED SKINNY JEANS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="halfstar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$210</span>
          </div>
        </div>
      </div>

      <button className="view-all-btn">View All</button>
    </div>
  );
}

export default Topselling;