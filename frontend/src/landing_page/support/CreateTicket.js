import React from 'react';

function CreateTicket() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 mb-5">

                <h1 className="fs-2">
                    To create a ticket, select a relevant topic.
                </h1>

                {/* Account */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                        Account & Registration
                    </h4>

                    <a href="/signup" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Creating an account
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account verification
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Updating account information
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account requirements
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Fees & charges
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Getting started with TradeZ
                    </a>
                </div>

                {/* Account Management */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        Your TradeZ Account
                    </h4>

                    <a href="/login" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Login & security
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Profile & account settings
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Personal information
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Password & authentication
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Managing account access
                    </a>
                </div>

                {/* Trading */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>{" "}
                        Trading
                    </h4>

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Orders & order types
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Placing and managing orders
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Trading dashboard
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Market information
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Holdings & positions
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Trading history
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Portfolio management
                    </a>
                </div>

                {/* Funds */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-money" aria-hidden="true"></i>{" "}
                        Funds
                    </h4>

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Adding funds
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Fund withdrawals
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Payment methods
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Managing bank details
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Transaction history
                    </a>
                </div>

                {/* Portfolio */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
                        Portfolio
                    </h4>

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Viewing your holdings
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Positions & performance
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Portfolio reports
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Order history
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account statements
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Performance tracking
                    </a>
                </div>

                {/* Platform */}
                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-desktop" aria-hidden="true"></i>{" "}
                        TradeZ Platform
                    </h4>

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Using the trading dashboard
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Market watch
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Watchlists
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Notifications
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Platform settings
                    </a>
                    <br />

                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Troubleshooting
                    </a>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;