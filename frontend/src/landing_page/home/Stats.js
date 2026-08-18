import React from 'react';

function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">

                    <h1 className="fs-2 mb-5">
                        Built around your experience
                    </h1>
                    <h2 className="fs-4">
                        Simple by design
                    </h2>
                    <p className="text-muted">
                        TradeZ keeps the trading experience clean and
                        straightforward, making it easier to explore markets,
                        manage orders, and follow your portfolio.
                    </p>
                    <h2 className="fs-4">
                        Everything in one place
                    </h2>
                    <p className="text-muted">
                        Keep track of holdings, positions, orders, and account
                        activity from a single dashboard.
                    </p>
                    <h2 className="fs-4">
                        Focus on useful tools
                    </h2>
                    <p className="text-muted">
                        No unnecessary features or distracting elements.
                        TradeZ focuses on the tools that matter to your
                        trading workflow.
                    </p>
                    <h2 className="fs-4">
                        Built with modern technology
                    </h2>
                    <p className="text-muted">
                        A full-stack application built with React, Node.js,
                        Express, and MongoDB to demonstrate a modern trading
                        platform experience.
                    </p>
                </div>
                <div className="col-6 p-5">
                    <div className="row text-center">
                        <div className="col-6 p-4">
                            <i
                                className="fa fa-line-chart fa-3x mb-3"
                                aria-hidden="true"
                            ></i>

                            <h5>
                                Market Insights
                            </h5>

                            <p className="text-muted">
                                Follow market movements and discover
                                opportunities.
                            </p>
                        </div>
                        <div className="col-6 p-4">
                            <i
                                className="fa fa-exchange fa-3x mb-3"
                                aria-hidden="true"
                            ></i>

                            <h5>
                                Easy Trading
                            </h5>

                            <p className="text-muted">
                                Manage your orders through a simple
                                interface.
                            </p>
                        </div>
                        <div className="col-6 p-4">
                            <i
                                className="fa fa-pie-chart fa-3x mb-3"
                                aria-hidden="true"
                            ></i>

                            <h5>
                                Portfolio
                            </h5>

                            <p className="text-muted">
                                Keep track of holdings and portfolio
                                performance.
                            </p>
                        </div>
                        <div className="col-6 p-4">
                            <i
                                className="fa fa-shield fa-3x mb-3"
                                aria-hidden="true"
                            ></i>

                            <h5>
                                Secure Account
                            </h5>

                            <p className="text-muted">
                                Keep your account information protected.
                            </p>
                        </div>

                    </div>
                    <div className="text-center mt-4">

                        <a
                            href="/product"
                            className="mx-3"
                            style={{ textDecoration: "none" }}
                        >
                            Explore TradeZ
                            <i className="fa fa-long-arrow-right ms-2"></i>
                        </a>

                        <a
                            href="/signup"
                            style={{ textDecoration: "none" }}
                        >
                            Get Started
                            <i className="fa fa-long-arrow-right ms-2"></i>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Stats;