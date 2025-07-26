import '../cssdetail/like.css'
import Iccon from '../Icon/Icon';

function Like() {
  return (
    <div className="l-container">
      <h1 className="arrival-h1">NEW ARRIVALS</h1>

      <div className="product-list">
        <div className="product">
          <img className='product-image' src="/img/t5.png" alt="tshirt" />
          <h1 className='product-title'>T-SHIRT WITH TAPE DETAILS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$120</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' src="/img/t6.png" alt="jeans" />
          <h1 className='product-title'>SKINNY FIT JEANS</h1>
          <div className='stars'>
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$192</span>
            <span className='price-old'>$260</span>
            <span className='discount-badge'>-20%</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' src="/img/t7.png" alt="shirt" />
          <h1 className='product-title'>CHECKERED SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />
            <span className='rating-number'>3.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$180</span>
          </div>
        </div>

        <div className="product">
          <img className='product-image' src="/img/t8.png" alt="sleeve" />
          <h1 className='product-title'>SLEEVE STRIPED T-SHIRT</h1>
          <div className='stars'>
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
          <Iccon icon="littlestar" />
            <span className='rating-number'>4.5/5</span>
          </div>
          <div className="price-box">
            <span className='price-current'>$91</span>
            <span className='price-old'>$160</span>
            <span className='discount-badge'>-30%</span>
          </div>
        </div>
      </div>

      
       
    </div>
  );
}

export default Like;