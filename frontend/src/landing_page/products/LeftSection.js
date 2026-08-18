import React from 'react';

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageUrl} alt="" />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        
                        <a href={tryDemo} style={{ textDecoration: "none"}}>Try demo <i class="fa fa-long-arrow-right"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none", marginLeft: "50px" }}>Learn more <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{ marginLeft: "50px" }}><img src="media/images/appStoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;