import React from 'react';

function Brokerage() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 text-center border-top">

                <div className="col-8 p-4">

                    <a href="/" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">
                            Trading Information
                        </h3>
                    </a>

                    <ul
                        className="text-muted"
                        style={{
                            textAlign: "left",
                            lineHeight: "2.5",
                            fontSize: "14px"
                        }}
                    >
                        <li>
                            View your orders and trading activity from the TradeZ dashboard.
                        </li>

                        <li>
                            Track your holdings and current positions in one place.
                        </li>

                        <li>
                            Review your completed orders and transaction history.
                        </li>

                        <li>
                            Monitor portfolio performance and market activity.
                        </li>

                        <li>
                            Manage your account and trading preferences from your profile.
                        </li>

                        <li>
                            TradeZ is an educational project and does not process real
                            financial transactions or charge real brokerage fees.
                        </li>
                    </ul>

                </div>

                <div className="col-4 p-4">

                    <a href="/" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">
                            Platform Features
                        </h3>
                    </a>

                    <p className="text-muted mt-3">
                        Explore TradeZ tools for market tracking, order management,
                        portfolio monitoring, and account management.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Brokerage;