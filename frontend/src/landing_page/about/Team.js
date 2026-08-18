import React from 'react';

function Team() {
    return (
        <div className="container">

            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center">
                    Our Team
                </h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >

                <div className="col-6 p-3 text-center">

                    <img
                        src="media/images/founder.jpg"
                        style={{
                            borderRadius: "100%",
                            width: "50%"
                        }}
                        alt="TradeZ Founder"
                    />

                    <h4 className="mt-5">
                        Daniel Bright
                    </h4>

                    <h6>
                        Founder & Developer
                    </h6>

                </div>

                <div className="col-6 p-3">

                    <p>
                        TradeZ is built with a simple idea: create a clean and
                        accessible trading experience while demonstrating how
                        modern web technologies can work together to build a
                        complete financial platform.
                    </p>

                    <br />

                    <p>
                        The project focuses on combining a responsive frontend
                        with a robust backend, authentication, portfolio
                        management, and trading-related functionality in one
                        application.
                    </p>

                    <br />

                    <p>
                        Connect on{" "}
                        <a
                            style={{ textDecoration: "none" }}
                            href="/"
                        >
                            GitHub
                        </a>
                        {" / "}
                        <a
                            href="/"
                            style={{ textDecoration: "none" }}
                        >
                            LinkedIn
                        </a>
                        {" / "}
                        <a
                            href="/"
                            style={{ textDecoration: "none" }}
                        >
                            Portfolio
                        </a>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Team;