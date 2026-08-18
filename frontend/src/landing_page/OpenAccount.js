import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a TradeZ account</h1>
                <p>Explore markets, manage trades, and track your portfolio.</p>
                <button className='p-2 btn btn-primary fs-5' style={{ width: "20%", margin: "0 auto" }}>
                    <a href="/signup" className="text-decoration-none text-white">
                        Signup now
                    </a></button>

            </div>
        </div>
    );
}

export default OpenAccount;