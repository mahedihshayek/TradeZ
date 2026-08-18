import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className='row p-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 fs-5'>Free equity investments and flat $20 traday and F&O trades</h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-4'>
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted'>All quality delivery investments are absolutely free -$0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/intradayTrades.svg" alt="" />
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat $20 or 0.03% per executed order on intraday trades across equity, currency and commodity trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free -$0 commission and DP charges. </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;