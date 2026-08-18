import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';



function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageUrl="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your android and IOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageUrl="media/images/console.png"
                productName="Console"
                productDescription="Our ultra fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your android and IOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <LeftSection
                imageUrl="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct funds online,commission free, delivered directly to your Demat account. Enjoy the investment experience on your Android and IOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageUrl="media/images/kiteconnect.png"
                productName="Kite Connect Api"
                productDescription="Our ultra fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your android and IOS devices."
                learnMore=""
            />

            <LeftSection
                imageUrl="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection to stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <p className='text-center mb-5 mt-5'>Want to know more about our technology stack? Checkout Zerodha.tech blog</p>
            <Universe />
        </>
    );
}

export default ProductPage;