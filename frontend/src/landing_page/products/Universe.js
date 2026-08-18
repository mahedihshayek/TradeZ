import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>TradeZ Features</h1>
                <p>
                    Everything you need to explore markets, manage trades,
                    and keep track of your portfolio.
                </p>
                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-line-chart fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Market Insights</h5>

                    <p className="text-small text-muted">
                        Track market movements and explore stock information.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-exchange fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Easy Trading</h5>

                    <p className="text-small text-muted">
                        Manage buy and sell orders through a simple interface.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-pie-chart fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Portfolio</h5>

                    <p className="text-small text-muted">
                        Monitor your holdings and portfolio performance.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-bar-chart fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Positions</h5>

                    <p className="text-small text-muted">
                        Keep track of your active positions and performance.
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-star fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Watchlist</h5>

                    <p className="text-small text-muted">
                        Keep your favorite stocks and market opportunities close.
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <i
                        className="fa fa-user-circle fa-3x mb-3"
                        aria-hidden="true"
                    ></i>

                    <h5>Account Management</h5>

                    <p className="text-small text-muted">
                        Manage your profile, account settings, and activity.
                    </p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5"
                    style={{
                        width: "20%",
                        margin: "0 auto"
                    }}
                >
                    <a
                        href="/signup"
                        className="text-decoration-none text-white"
                    >
                        Get Started
                    </a>
                </button>

            </div>
        </div>
    );
}

export default Universe;