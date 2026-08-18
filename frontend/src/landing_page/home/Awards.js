import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="img" />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in Bangladesh</h1>
                    <p className='mb-5'>Largest stock broker in Bangladesh Largest stock broker in Bangladesh Largest </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>  Futures and options</p>
                                </li>
                                <li>
                                    <p>  Stocks </p>
                                </li>
                                <li>
                                    <p>  Mutual funds</p>
                                </li>

                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>  Derivatives</p>
                                </li>
                                <li>
                                    <p>  Loans</p>
                                </li>
                                <li>
                                    <p>  Bonds</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="img" style={{width:"95%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;