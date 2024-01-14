import React from 'react'
import "./Landing_page.css"
import Tab from '../Tab_page/Tab_page'

export default function Landing_page() {
  return (
    <div className='main_landing'>
    <div className="container">
        <h1 className='main_heading_landing'>Participate $MArt presale</h1>

        <div className="row justify-content-center">
          <div className="col-md-6 this_ha">
          <div className="landing_box">
          <div className="row">
            <div className="col-6">
            <div className='info_pre'>

              <h6>Current stage </h6>
              <h2>Stage 1</h2>
            </div>
            </div>
            <div className="col-6 text-end">
            <div className='info_pre'>

              <h6>Remaining Tokens </h6>
              <h2>5,999,000 $mart</h2>
            </div>
            </div>
          </div>
          <div className="progress_bar">
                <div className="inner_pro" style={{width:"15%"}}></div>
              </div>
              <div className="row mt-3">
            <div className="col-6">
            <div className='info_pre'>

              <h6>Next stage price </h6>
              <h2>$0.22</h2>
            </div>
            </div>
            <div className="col-6 text-end">
            <div className='info_pre'>

              <h6>Total Token Sold </h6>
              <h2>68.586</h2>
            </div>
            </div>
          </div>
          <div className='buy_br'>
            <h5>Buy before price increase!</h5>
          </div>
          <div className='rate mt-4'>
            <h4>$ 0.2=1 $mart</h4>
          </div>
<div className="buy_chain_box">
<Tab/>

</div>
          {/* <div className='bg_landing'></div> */}
          </div>

          </div>
        </div>
            
        </div>
    </div>

   
  )
}
