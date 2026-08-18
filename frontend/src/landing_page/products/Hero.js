import React from 'react';

function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className="text-center mt-5 p-3">

                <h1>
                    Technology
                </h1>

                <h3 className="text-muted mt-3 fs-4">
                    Simple, modern, and intuitive trading experience.
                </h3>

                <p className="text-muted mt-3 mb-5">
                    Explore our
                    <a
                        href="/product"
                        style={{ textDecoration: "none" }}
                    >
                        {" "}platform features{" "}
                        <i className="fa fa-long-arrow-right"></i>
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Hero;