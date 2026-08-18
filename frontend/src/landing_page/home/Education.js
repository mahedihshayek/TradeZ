import React from 'react';

function Education() {
    return (
        <div className="container mt-5 p-5">
            <div className="row">

                <div className="col-6">
                    <img
                        src="media/images/education.png"
                        alt="img"
                        style={{ width: "70%" }}
                    />
                </div>

                <div className="col-6">

                    <h2 className="mb-3 fs-2">
                        Learn before you trade
                    </h2>

                    <p>
                        Explore simple guides and resources to understand
                        markets, trading concepts, portfolio management,
                        and investing fundamentals.
                    </p>

                    <a href="/" style={{ textDecoration: "none" }}>
                        Learning Center{" "}
                        <i className="fa fa-long-arrow-right"></i>
                    </a>

                    <p className="mt-3">
                        Get practical answers to common trading questions
                        and learn more about using the TradeZ platform.
                    </p>

                    <a href="/" style={{ textDecoration: "none" }}>
                        Trading Guide{" "}
                        <i className="fa fa-long-arrow-right"></i>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Education;