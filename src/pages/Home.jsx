import './Home.css';
import productOne from '../assets/images/1-1.webp';
import productTwo from '../assets/images/1-2.webp';
import productThree from '../assets/images/1-3.webp';
import productFour from '../assets/images/11-1.webp';
import iconOne from '../assets/images/icon-01.webp';
import iconTwo from '../assets/images/icon-2.webp';
import iconThree from '../assets/images/icon-3.webp';
import iconFour from '../assets/images/icon-4.webp';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      {/* Hero Header */}
      <header>
        <div className="aw_gradient-overlay"></div>
        <div className="container">
          <div className="aw_header-content">
            <h6>New Collection</h6>
            <h1>
              The Best <span>Panjabi</span> Collection
            </h1>
            <p>
              Don’t Lose this opportunity. Grab The Best product at you price
              range. We offer best product at best price.{' '}
            </p>
            <div>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </header>
      {/* Trending */}
      <section className="aw_trending">
        <div className="container">
          <div className="aw_trending-contents">
            <h6>Our Popular Products</h6>
            <h2 className="aw_line-through">Trending Now</h2>
          </div>
          <div className="aw_trending-products">
            {/* single product item */}
            <div className="aw_trending-product">
              <img src={productOne} alt="product-one" className="img-fluid" />
              <h4>Simple Plain One Colored Traditional Panjabi</h4>
              <p>
                <span>$1999</span> $499
              </p>
              <div>
                <button>Select Options</button>
              </div>
            </div>
            {/* single product item */}
            <div className="aw_trending-product">
              <img src={productTwo} alt="product-one" className="img-fluid" />
              <h4>Simple Plain One Colored Traditional Panjabi</h4>
              <p>
                <span>$1999</span> $499
              </p>
              <div>
                <button>Select Options</button>
              </div>
            </div>
            {/* single product item */}
            <div className="aw_trending-product">
              <img src={productThree} alt="product-one" className="img-fluid" />
              <h4>Simple Plain One Colored Traditional Panjabi</h4>
              <p>
                <span>$1999</span> $499
              </p>
              <div>
                <button>Select Options</button>
              </div>
            </div>
            {/* single product item */}
            <div className="aw_trending-product">
              <img src={productFour} alt="product-one" className="img-fluid" />
              <h4>Simple Plain One Colored Traditional Panjabi</h4>
              <p>
                <span>$1999</span> $499
              </p>
              <div>
                <button>Select Options</button>
              </div>
            </div>
          </div>
          <div className="aw_trending-button">
            <button>Shop Now</button>
          </div>
        </div>
      </section>
      {/* Subscribe */}
      <section className="aw_subscribe">
        <div className="aw_black-overlay"></div>

        <div className="container">
          <div className="aw_subscribe-contents">
            <h2>Subscribe And Be Updated With The Discounts! Phone Number</h2>
            <form>
              <input type="tel" placeholder="01633154215" />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="aw_why_choose_us">
        <div className="container">
          <div className="aw_why-choose-us-contents">
            <h6>BEST IN BUSINESS</h6>
            <h2 className="aw_line-through">WHY CHOOSE US</h2>
          </div>
          <div className="aw_why-choose-us-cards">
            {/* single card */}
            <div className="aw_why-choose-us-card">
              <img src={iconFour} alt="icon-one" className="img-fluid" />
              <h4>BIG DISCOUNTS</h4>
              <p>
                Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis
                Orci Viverra, Cursus Justo.
              </p>
            </div>
            {/* single card */}
            <div className="aw_why-choose-us-card">
              <img src={iconOne} alt="icon-two" className="img-fluid" />
              <h4>FAST SHIPPING</h4>
              <p>
                Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis
                Orci Viverra, Cursus Justo.
              </p>
            </div>
            {/* single card */}
            <div className="aw_why-choose-us-card">
              <img src={iconTwo} alt="icon-one" className="img-fluid" />
              <h4>SECURE PAYMENTS</h4>
              <p>
                Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis
                Orci Viverra, Cursus Justo.
              </p>
            </div>
            {/* single card */}
            <div className="aw_why-choose-us-card">
              <img src={iconThree} alt="icon-one" className="img-fluid" />
              <h4>ORDER TRACKING</h4>
              <p>
                Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis
                Orci Viverra, Cursus Justo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Review */}
      {/* Sale */}
      {/* Blog */}
      {/* Footer */}
    </div>
  );
};

export default Home;
