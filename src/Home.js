import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
                    alt="" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Make Your Own Luck: How to Increase Your Odds of Success in Sales, Startups, Corporate Career and Life"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/71BMepM7dBL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product
                        id="86868686"
                        title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={698.99}
                        image="data:image/webp;base64,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"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="34234234423"
                        title="AJO A1 Bluetooth Smart Watch with Camera Android/iOS Smartphones"
                        price={198.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41m2JhaKuwL._AC_UL320_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Echo Plus (2nd Gen) – Premium sound,built-in Smart (White)"
                        price={330.9}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61LAoHwq15L._AC_UY218_.jpg"
                    />
                    <Product
                        id="65345435435"
                        title="CHANEL Bleu De Chanel (EDP, 100 ml)"
                        price={49.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/31l3uxtmd2L._SY450_.jpg"
                    />

                </div>
                <div className="home__row">
                    <Product
                        id="34324323"
                        title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        price={1339.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._SX679_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home;