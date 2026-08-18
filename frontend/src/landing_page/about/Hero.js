import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 text-center'>
                    We pioneered the discount broking model in Bangladesh. <br /> Now we are breaking ground with our technology.
                </h1>
            </div>
            <div className='row p-5 mt-5 border-top text-muted fs-6' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5'>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney up one of the more obscure Latin words, consectetur literature, discovered the undoubtable source.</p><br />
                    <p> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p><br />
                    <p> The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p><br />

                    <p>
                      <a href="" style={{textDecoration:"none"}}>Richard</a>   McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure .
                    </p><br />

                    <p>
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;