import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="" />
                <div className="home__row">
                    <Product id={1} title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 Oct. 2011" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5} />
                    <Product id={2} title="Apple MacBook Pro 15 Inc. 2017 TouchBar - 3.1GHz i7 - 16GB RAM - Radeon 560 4GB - 500GB SSD" price={1650} image="https://images-na.ssl-images-amazon.com/images/I/71Jl-S-MHTL._AC_SL1378_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id={3} title="Apple Mac mini 2018 - 3.2GHz 6 Core i7 - 32GB RAM - 512GB SSD" price={1661.50} image="https://images-na.ssl-images-amazon.com/images/I/31AiEcRUEbL._AC_.jpg" rating={5} />
                    <Product id={4} title="Echo Plus (2nd Gen), Charcoal Fabric + Philips Hue White bulb E27" price={71.99} image="https://images-na.ssl-images-amazon.com/images/I/91%2B3HHJDGKL._AC_SL1500_.jpg" rating={4} />
                    <Product id={5} title="nuraphone — Wireless Bluetooth Over Ear Headphones with Earbuds, Active Noise Cancellation (ANC), 20 Hour Battery Life" price={267.67} image="https://images-na.ssl-images-amazon.com/images/I/71WbWykN5mL._AC_SL1500_.jpg" rating={3} />
                </div>
                <div className="home__row">
                    <Product id={6} title="Hitachi U65L7000 165cm 65 4K UHD Smart TV PVR" price={579.96} image="https://images-na.ssl-images-amazon.com/images/I/915ZhYSM8RL._AC_SL1500_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
