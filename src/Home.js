import React from 'react';
import "./Home.css"
import Product from './Product';

const Home = () => {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses - Kindle edition by Ries, Eric"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            ></Product>
            <Product
              id="49538094"
              title="Kenwood kMix stand mixer for Baking, Stylish kitchen mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl."
              price={239.99}
              image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/kMix%20by%20Kenwood/kMix%20Purple/kMix-KMX50P-800x600-1_800x600.jpg"
              rating={4}
            ></Product>
          </div>

          <div className="home__row">
            <Product
              id="49538099"
              title="Smart Watch Silicone Band For Android & iOS,Black - M4."
              price={199.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              rating={3}
            ></Product>
            <Product
              id="49538033"
              title="amazon echo 3rd generation smart speaker with alexa, now with noticeably improved sound and a new look.."
              price={69.99}
              image="https://www.thesource.ca/medias/20190926144729-108085278-B.jpg-mediaConversion-640-x-480-0?context=bWFzdGVyfGltYWdlc3w5ODc1N3xpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDgxLzkxODM0Njk0Njk3MjYuanBnfDk4MWRmOTIwZDlhYzZhMjZiOWVkZDdkZGJiZGE4NTU5ODA4OGI2YTc3YTU2YTJmYmQ5OWI4YjZmY2QzMGY1MzM"
              rating={4}
            ></Product>
            <Product
              id="49538024"
              title="new apple ipad pro (12.9-inch wi-fi 128gb) - space grey (4th generation)"
              price={1149.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg"
              rating={4}
            ></Product>
          </div>

          <div className="home__row">
            <Product
              id="49538033"
              title="The Samsung 49-Inch Super Ultra wide Curved WQHD Monitor is the hardware your gaming has been waiting for."
              price={999.99}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
              rating={4}
            ></Product>
          </div>
        </div>
      </div>
    );
};

export default Home;