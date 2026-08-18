import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Online platform to invest to stocks, derivatives,mutual funds and more</p>

   
                    <button className='p-2 btn btn-primary fs-5' style={{ width: "20%", margin: "0 auto" }}>
                    <a href="/signup" className="text-decoration-none text-white">
                        Signup now
                    </a></button>

            </div>
        </div>
    );
}

export default OpenAccount;