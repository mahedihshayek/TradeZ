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
                icon="fa-exchange"
                productName="TradeZ"
                productDescription="A simple and intuitive trading experience for exploring markets, managing orders, and tracking your positions."
                tryDemo="/"
                learnMore="/"
                googlePlay="/"
                appStore="/"
            />
            <RightSection
                icon="fa-pie-chart"
                productName="Portfolio"
                productDescription="Monitor your holdings, positions, and portfolio performance through a clean and easy-to-use interface."
                learnMore="/"
            />
            <LeftSection
                icon="fa-line-chart"
                productName="Market Insights"
                productDescription="Explore market movements and follow the stocks and market information that matter to you."
                tryDemo="/"
                learnMore="/"
                googlePlay="/"
                appStore="/"
            />
            <RightSection
                icon="fa-code"
                productName="TradeZ API"
                productDescription="A developer-friendly API concept designed to connect applications with trading and market data workflows."
                learnMore="/"
            />
            <LeftSection
                icon="fa-book"
                productName="TradeZ Learn"
                productDescription="Learn the fundamentals of markets, trading, and investing through simple and easy-to-understand educational resources."
                tryDemo="/"
                learnMore="/"
                googlePlay="/"
                appStore="/"
            />
            <p className="text-center mb-5 mt-5">
                Built with modern web technologies to create a simple and
                intuitive trading experience.
            </p>
            <Universe />
        </>
    );
}

export default ProductPage;