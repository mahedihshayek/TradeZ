import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">

                <img
                    src="media/images/homeHero.jfif"
                    alt="TradeZ trading platform"
                    className="mb-5"
                    style={{
                        width: "75%",
                        maxWidth: "850px",
                        height: "auto",
                        margin: "0 auto",
                        borderRadius: "8px"
                    }}
                />

                <h1 className="mt-5">
                    Trade smarter. Stay informed.
                </h1>

                <p>
                    Explore markets, manage trades, and track your portfolio.
                </p>

                <button
                    className="p-2 btn btn-primary fs-5"
                    style={{
                        width: "180px",
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

export default Hero;