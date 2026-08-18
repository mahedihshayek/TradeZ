import React from 'react';

function CreateTicket() {
    return (
        <div className="container">
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2'>
                    To create a ticket, select a relevant topic.
                </h1>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> Account opening
                    </h4>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Online account opening </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Offline account opening </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Company partnership and Huf account opening </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> NRI account opening </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Charges of Zerodha </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Zerodha IDFC first bank 3-in-1 account </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Getting started </a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha account
                    </h4>
                    <a href="/login" style={{ textDecoration: "none", lineHeight: "2.5" }}> Login credentials </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Account modification and segment addition </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> DP ID and bank details </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Your profile </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Transfer and conversion of shares</a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha account
                    </h4>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Margin/leverage, Product and order types </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Kite web and mobile</a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Trading FAQs </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Corporate actions </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Sentinel</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Kite api</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Pi and other platform</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Stock reports+</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> GTT</a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-money" aria-hidden="true"></i> Funds
                    </h4>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Adding Funds </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds Withdrawal </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> eMandates </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Adding bank accounts </a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console
                    </h4>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Reports </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>Ledger</a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Portfolio </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> 60 day challenge </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> IPO</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Referral program </a>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''>
                        <i class="fa fa-circle-o" aria-hidden="true"></i> Coin
                    </h4>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Understanding mutual funds </a> <br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> About coin </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Buying and selling through coin </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Starting an SIP </a><br />
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Managing your portfolio</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Coin app</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Moving to coin</a>
                    <a href="/" style={{ textDecoration: "none", lineHeight: "2.5" }}> Government securities</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;