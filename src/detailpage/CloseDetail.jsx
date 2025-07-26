import { useState } from 'react';
import '../cssdetail/CloseDetail.css';
import Iccon from '../Icon/Icon';

function CloseDetail() {
  const [count, setcount] = useState(0);
  const [mainImage, setMainImage] = useState('/img/t4.png');
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const handleIncrease = () => {
    setcount(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setcount(prev => prev - 1);
    }
  };

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="detail-container">
      <div className="breadcrumb">
        <span>Home</span>
        <Iccon icon="lArrow" />
        <span>Shop</span>
        <Iccon icon="lArrow" />
        <span>Men</span>
        <Iccon icon="lArrow" />
        <span className='tishrt'>T-Shirts</span>
      </div>

      <div className="detail-content">
        <div className="image-section">
          <img className="thumbnail" src="/img/t1.png" alt="" onClick={() => handleThumbnailClick('/img/t1.png')} />
          <img className="thumbnail" src="/img/t2.png" alt="" onClick={() => handleThumbnailClick('/img/t2.png')} />
          <img className="thumbnail" src="/img/t3.png" alt="" onClick={() => handleThumbnailClick('/img/t3.png')} />
          <img className="main-image" src={mainImage} alt="Main product" />
        </div>

        <div className="info-section">
          <h1 className="ptitle">One Life Graphic T-shirt</h1>

          <div className="rating-box">
            <div className="stars">
              <Iccon icon="littlestar" />
              <Iccon icon="littlestar" />
              <Iccon icon="littlestar" />
              <Iccon icon="littlestar" />
              <Iccon icon="halfstar" />
            </div>
            <span className="rating-number">4.5/5</span>
          </div>

          <div className="price-box">
            <span className="price-current">$180</span>
            <span className="price-old">$300</span>
            <span className="discount-badge">-40%</span>
          </div>

          <p className="description">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="divider"></div>

          <div className="color-picker">
            <p className="section-title">Select Color</p>
            <div className="colors">
              <div className="circle"><Iccon icon="firstCircle" /></div>
              <div className="circle"><Iccon icon="secondCircle" /></div>
              <div className="circle"><Iccon icon="thirdCircle" /></div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="size-picker">
            <p className="section-title">Choose Size</p>
            <div className="sizes">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <div key={size} className={`size ${selectedSize === size ? 'active-size'  : ''}`}onClick={() => setSelectedSize(size)}>
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          <div className="cart-controls">
            <div className="count-box">
              <span className="minus" onClick={handleDecrease}>-</span>
              <span className="count">{count}</span>
              <span className="plus" onClick={handleIncrease}>+</span>
            </div>
            <button className="add-btn">Add to Cart</button>
          </div>

          <div className="bottom-tabs">
            {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
              <div className="tab" key={tab} onClick={() => setActiveTab(tab)}>
                <span className={`tab-label ${activeTab === tab ? 'active' : ''}`}>{tab}</span>
                <div className={`tab-line ${activeTab === tab ? 'dark' : 'light'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseDetail;
