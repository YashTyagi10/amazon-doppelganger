import React from 'react';
import './Home.css';
import Product from  './Product';

function Home() {
  return (
      <div className="home">
          <div className="home__container">
              <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

              <div className="home__row">
                <Product 
                      id="123123" 
                      title="Ikigai: The Japanese secret to a long and happy life"
                      price={29.99} 
                      rating={5}
                      image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
                />
                <Product
                      id="49538094"
                      title="New Apple iPhone 12 (128GB) - White"
                      price={999.99}
                      rating={4}
                      image="https://m.media-amazon.com/images/I/711wsjBtWeL._AC_UY218_.jpg"
                />
              </div>

              <div className="home__row">
                  <Product
                      id="4903850"
                      title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                      price={199.99}
                      rating={3}
                      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                  />
                  <Product
                      id="23445930"
                      title="JavaScript: JavaScript Programming Made Easy for Beginners & Intermediates (Step By Step With Hands On Projects) "
                      price={98.99}
                      rating={5}
                      image="https://images-na.ssl-images-amazon.com/images/I/41ft+b9nQnL._SX331_BO1,204,203,200_.jpg"
                  />
                  <Product
                      id="3254354345"
                      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                      price={598.99}
                      rating={4}
                      image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                  />
              </div>

              <div className="home__row">
                  <Product
                      id="90829332"
                      title="MAXPRO PTM405 2HP(4 HP Peak) Folding Treadmill, Electric Motorized Power Fitness Running Machine with LCD Display and Mobile Phone Holder Perfect for Home Use “DIY Installation with Video call assistance"
                      price={1094.98}
                      rating={4}
                      image="https://images-na.ssl-images-amazon.com/images/I/61jTo5c6NTL._SL1500_.jpg"
                  />
              </div>
          </div>
      </div>
  )
}

export default Home