import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn more <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;