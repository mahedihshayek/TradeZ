import React from 'react';

function Hero() {
    return (
        <div className="container">

            <div className="row p-5 border-bottom text-center">
                <h1>Pricing</h1>

                <h3 className="text-muted mt-3 fs-5">
                    Simple, transparent pricing for a better trading experience
                </h3>
            </div>

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <i
                        className="fa fa-bar-chart fa-3x mb-4"
                        aria-hidden="true"
                    ></i>

                    <h1 className="fs-4">
                        Market Tracking
                    </h1>

                    <p className="text-muted">
                        Explore market data and track the stocks you care about.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <i
                        className="fa fa-exchange fa-3x mb-4"
                        aria-hidden="true"
                    ></i>

                    <h1 className="fs-4">
                        Trading Tools
                    </h1>

                    <p className="text-muted">
                        Manage orders, positions, and trading activity from one dashboard.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <i
                        className="fa fa-pie-chart fa-3x mb-4"
                        aria-hidden="true"
                    ></i>

                    <h1 className="fs-4">
                        Portfolio Tracking
                    </h1>

                    <p className="text-muted">
                        Monitor your holdings and portfolio performance in one place.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Hero;