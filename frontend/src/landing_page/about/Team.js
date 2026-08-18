import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center'>
                    People
                </h1>
            </div>
            <div className='row p-3 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-3 text-center'>
                    <img src="media/images/nithinKamath.jpg" style={{ borderRadius: "100%", width: "50%" }} alt="" />
                    <h4 className='mt-5'>Nithin Kamath</h4>
                    <h6>Founder & CEO</h6>
                </div>
                <div className='col-6 p-3'>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p><br />

                    <p>
                        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Hampden-Sydney College in Virginia, .
                    </p><br />

                    <p>
                        Connect on <a style={{ textDecoration: "none" }} href="/">Homepage / </a> <a href="/" style={{ textDecoration: "none" }}>TradingQNA /</a> <a href="www.x.com" style={{ textDecoration: "none" }}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;