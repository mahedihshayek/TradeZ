import React from 'react';

function Footer() {
    return (
        <footer className='bg-light'>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src="media/images/logo.svg" style={{ width: "50%" }} alt="logo" />
                        <p>&copy; 2014-2026, Zerodha Broking Ltd. All rights reserved. </p>
                    </div>
                    <div className='col' >
                        <p>Company</p>
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>About</a> <br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }} >Products</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Pricing</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Referral programme</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Careers</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Zerodha.Tech</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Press & media</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Zerodha cares</a>
                    </div>
                    <div className='col' >
                        <p>Support</p>
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Contact</a> <br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Support portal</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Z-connect blog</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>List of charges</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Download & resources</a><br />
                    </div>
                    <div className='col' >
                        <p>Account</p>
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Open and account</a> <br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>Fund transfer</a><br />
                        <a href="/" className='text-muted' style={{ textDecoration: "none" }}>60 day challenge</a><br />

                    </div>
                </div>

                <div className='mt-5 text-muted' style={{ fontSize: "16px" }}>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>

                    <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;