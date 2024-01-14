import React from 'react'
import "./Secure_page.css"

export default function Secure_page() {
  return (
    <div className='main_secure_page'>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6 text-center">
                <h3 className='se_head'>100% Secure</h3>
            </div>
            <div className="col-md-6 text-center">
                <p className='se_para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis temporibus consequatur velit ad reiciendis corrupti, inventore iure, eos ipsum consequuntur architecto perspiciatis quod quos laudantium pariatur minima necessitatibus repellendus.</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
                <div className="black_box">
                <h1>6</h1>
<p>Total Stages</p>
                </div>
            </div>
            <div className="col-md-4 mt-3 mt-md-0">
                <div className="black_box resvers">
                <h1>$13.171</h1>
<p>Amount Raised</p>
                </div>
            </div>
            <div className="col-md-4 mt-3 mt-md-0">
                <div className="black_box">
                <h1>6,000,000</h1>
<p>Total token availible for sale</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
