import '../csshomepage/newArrivals.css'
import Iccon from '../Icon/Icon';
import { useNavigate } from 'react-router-dom';

function NewArrivals() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container">
      <h1>NEW ARRIVALS</h1>
      <div className="product-list">
        <div className="product">
          <img className='product-image' onClick={() => handleClick("tshirt")} style={{ cursor: "pointer" }} src="/img/tishrt.png" alt="tshirt" />
          <h1 className='product-title'>T-SHIRT WITH TAPE DETAILS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="halfstar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$120</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("jeans")} style={{ cursor: "pointer" }} src="/img/jeans.png" alt="jeans" />
          <h1 className='product-title'>SKINNY FIT JEANS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="halfstar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$192</span>
            <span className='price-old'>$260</span>
            <span className='discount-badge'>-20%</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("shirt")} style={{ cursor: "pointer" }} src="/img/shirt.png" alt="shirt" />
          <h1 className='product-title'>CHECKERED SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="halfstar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$180</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' onClick={() => handleClick("sleeve")} style={{ cursor: "pointer" }} src="/img/sleeve.png" alt="sleeve" />
          <h1 className='product-title'>SLEEVE STRIPED T-SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" /><Iccon icon="littlestar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$91</span>
            <span className='price-old'>$160</span>
            <span className='discount-badge'>-30%</span>
          </div>
        </div>
      </div>

      <button className="view-all-btn">View All</button>
      <div className='line'></div>
    </div>
  );
}

export default NewArrivals;