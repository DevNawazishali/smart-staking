import React from 'react'
import "./P2p.css"
import imgg from "../Assets/image-7.png"
import imggg from "../Assets/image-8.png"

export default function P2p() {
  return (
    <div className='main_ptop'>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img className='imges_here' src={imgg} alt="" />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
                <img className='imges_here' src={imggg} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
