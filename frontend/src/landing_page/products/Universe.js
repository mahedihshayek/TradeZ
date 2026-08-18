import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallCaseLogo.png" alt="" p-3 />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" style={{
                        width: "auto",
                        height: "50px"
                    }} alt="" p-3 />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" style={{
                        width: "auto",
                        height: "50px"
                    }} alt="" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{
                        width: "auto",
                        height: "50px"
                    }} alt="" p-3 />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" style={{
                        width: "auto",
                        height: "50px"
                    }} alt="" p-3 />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" style={{
                        width: "auto",
                        height: "50px"
                    }} alt="" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                {/* <button className='p-2 btn btn-primary fs-5 mt-3 mb-3' style={{ width: "20%", margin: "0 auto" }}>Signup now</button> */}
                <button className='p-2 btn btn-primary fs-5' style={{ width: "20%", margin: "0 auto" }}>
                    <a href="/signup" className="text-decoration-none text-white">
                        Signup now
                    </a></button>
            </div>
        </div>
    );
}

export default Universe;