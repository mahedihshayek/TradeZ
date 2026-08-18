import React from 'react';

function Hero() {
    return (
        <div className="container">

            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center">
                    Building a simpler way to explore the markets. <br />
                    Technology that puts your trading experience first.
                </h1>
            </div>

            <div
                className="row p-5 mt-5 border-top text-muted fs-6"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >

                <div className="col-6 p-5">

                    <p>
                        TradeZ is a modern stock trading platform built around
                        simplicity, accessibility, and technology. Our goal is
                        to create an intuitive experience where users can explore
                        market information and manage their trading activity
                        without unnecessary complexity.
                    </p>

                    <br />

                    <p>
                        We believe that good technology should make complicated
                        things easier to understand. From tracking your holdings
                        to reviewing positions and managing orders, TradeZ brings
                        essential trading features together in one place.
                    </p>

                    <br />

                    <p>
                        The platform is designed with a clean interface and a
                        focus on providing a smooth experience across the entire
                        trading journey.
                    </p>

                </div>

                <div className="col-6 p-5">

                    <p>
                        TradeZ combines a modern web interface with a powerful
                        backend to create a complete full-stack trading
                        experience. Every part of the platform is designed with
                        usability and performance in mind.
                    </p>

                    <br />

                    <p>
                        <a
                            href="/"
                            style={{ textDecoration: "none" }}
                        >
                            Learn more
                        </a>{" "}
                        about the platform, explore its features, and discover
                        how TradeZ brings different parts of the trading
                        experience together.
                    </p>

                    <br />

                    <p>
                        TradeZ is an educational portfolio project created to
                        demonstrate modern full-stack web development using
                        technologies such as React, Node.js, Express, and
                        MongoDB. It is not a real brokerage or financial service.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Hero;