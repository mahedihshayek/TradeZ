import React from 'react';

function Pricing() {
    return (
        <div className="container mb-5 p-5">
            <div className="row">

                <div className="col-4">
                    <h1 className="mb-3 fs-2">
                        Simple pricing
                    </h1>

                    <p>
                        Clear and straightforward pricing with no confusing
                        charges or unnecessary complexity.
                    </p>

                    <a href="/pricing" style={{ textDecoration: "none" }}>
                        See pricing{" "}
                        <i className="fa fa-long-arrow-right"></i>
                    </a>
                </div>

                <div className="col-2"></div>

                <div className="col-6">
                    <div className="row text-center">

                        <div className="col p-3 border">
                            <h1 className="mb-3">Free</h1>

                            <p>
                                Explore markets and<br />
                                track your portfolio
                            </p>
                        </div>

                        <div className="col p-3 border">
                            <h1 className="mb-3">Simple</h1>

                            <p>
                                Manage trades and<br />
                                monitor positions
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;