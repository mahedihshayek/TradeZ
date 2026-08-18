import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>Brokerage Calculator</h3></a>
                    <ul className='text-muted' style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}}>
                        <li>
                            Call & trade RMS auto squareoff. Additional charges of $50 GST per order
                        </li>
                        <li>
                            Digital contract note will be sent via e-mail.
                        </li>
                        <li>
                            Physical copies of contract notes, if required shall be charge $20 contract notes. Courier charges apply.
                        </li>
                        <li>
                            For NRI(non PIS) account 0.05% or $100 per executed order for equity.
                        </li>
                        <li>
                            For NRI(PIS) account 0.05% or $200 per executed order for equity.
                        </li>
                        <li>
                            If the account is in debit balance, any order will be charged $40 per executed order instead of $20
                        </li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="/" style={{ textDecoration: "none" }}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;