import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img
                        src="media/images/tradeztrophy.jpg"
                        alt="TradeZ platform"
                        style={{
                            width: "85%",
                            display: "block",
                            margin: "0 auto"
                        }}
                    />
                </div>
                <div className="col-6 p-5 mt-5">

                    <h1>
                        Everything you need in one place
                    </h1>

                    <p className="mb-5">
                        TradeZ brings essential trading and portfolio tools
                        together in a clean and simple interface.
                    </p>

                    <div className="row">

                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Market tracking</p>
                                </li>

                                <li>
                                    <p>Stock holdings</p>
                                </li>

                                <li>
                                    <p>Order management</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Portfolio insights</p>
                                </li>

                                <li>
                                    <p>Position tracking</p>
                                </li>

                                <li>
                                    <p>Trading dashboard</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <p className="mt-4 text-muted">
                        Built with modern web technologies to provide
                        a smooth and intuitive trading experience.
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Awards;