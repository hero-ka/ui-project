import '../cssdetail/DetailReviews.css';
 import Iccon from '../Icon/Icon';

function DetailReviews() {
  return (<div className="r-container"> <div className="r-top"> <div className="r-title"> <h2>All Reviews</h2> <span>(451)</span> </div>

    <div className="r-actions">
      <Iccon icon="setting" />
      <div className="r-latest">
        <h4>Latest</h4>
        <Iccon icon="DownIcon" />
      </div>
      <button className="r-write-btn">Write a Review</button>
    </div>
  </div>

    <div className="r-reviews-wrapper">
      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />
            


          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>samantah.D</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
          I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.
          As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.
        </p>
        <h5 className="r-date">Posted on August 16, 2023</h5>
      </div>

      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />

          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>Alex M.</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself,
         I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."        </p>
        <h5 className="r-date">Posted on August 15, 2023</h5>
      </div>

      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />

          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>Ethan R.</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye,
         and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
        </p>
        <h5 className="r-date">Posted on August 16, 2023</h5>
      </div>

      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />

          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>Olivia P.</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. 
        It's evident that the designer poured their creativity into making this t-shirt stand out."
        </p>
        <h5 className="r-date">Posted on August 17, 2023</h5>
      </div>

      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />

          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>Liam K.</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill.
         It's like wearing a piece of art that reflects my passion for both design and fashion."
        </p>
        <h5 className="r-date">Posted on August 18, 2023</h5>
      </div>

      <div className="r-review">
        <div className="r-review-header">
          <div className="stars">
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="littlestar" />
            <Iccon icon="halfstar" />

          </div>
          <div className="three">
          <Iccon icon="threeCircle" />
          </div>
          <div className="dots-icon"><Iccon icon="dots" /></div>
        </div>
        <div className="r-review-user">
          <h3>Ava H.</h3>
          <Iccon icon="tick" />
        </div>
        <p className="r-review-text">
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy.
         The intricate details and thoughtful layout of the design make this shirt a conversation starter."
        </p>
        <h5 className="r-date">Posted on August 19, 2023</h5>
      </div>
    </div>
    <button className='more-btn'>Load More Reviews</button>
  </div>

  );
}

export default DetailReviews;