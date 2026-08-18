import React from 'react';

function Education() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="img" style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h2 className='mb-3 fs-2'>Free and open market education</h2>
                    <p>Varsity the  largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href="/"  style={{ textDecoration: "none" }}>Varsity <i class="fa fa-long-arrow-right"></i></a>
                    <p className='mt-3' >Trading Q&A, the most active trading and investment community in Bangladesh for all market related queries</p>
                    <a href="/" style={{ textDecoration: "none" }}>Trading Q&A <i class="fa fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;