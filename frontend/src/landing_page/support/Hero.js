import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">

            <div className="p-5" id="supportWrapper">
                <h3>TradeZ Support Center</h3>
                <a href="/">Track Support Tickets</a>
            </div>

            <div className="row p-5 m-3">

                <div className="col-6 p-5">

                    <h1 className="fs-3">
                        Search for an answer or browse help topics to get support
                    </h1>

                    <input
                        placeholder="Eg. How do I create an account?"
                        value=""
                        readOnly
                    />

                    <br />

                    <a href="/">Account & Registration</a>
                    <br />

                    <a href="/">Orders & Trading</a>
                    <br />

                    <a href="/">Portfolio & Holdings</a>
                    <br />

                    <a href="/">Funds & Payments</a>

                </div>

                <div className="col-6 p-5">

                    <h1 className="fs-3">
                        Featured
                    </h1>

                    <ol>
                        <li>
                            <a href="/">
                                Getting started with TradeZ
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                Understanding your portfolio and orders
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                How to manage your TradeZ account
                            </a>
                        </li>
                    </ol>

                </div>

            </div>

        </section>
    );
}

export default Hero;