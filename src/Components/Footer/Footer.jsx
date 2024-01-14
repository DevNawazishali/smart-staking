import React from 'react'
import "./Footer.css"
import logo from "../Assets/logoicon.svg"
import { FaDiscord, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className='Main_footer_bg'>
    <div className="container">
        <div className="row m-0">
            <div className="col-md-6">
                <img src={logo} alt="" />
                <p className='cpr'>©2024,All Rights Reserved</p>
            </div>
            <div className="col-md-6">
                {/* <img src={logo} alt="" /> */}
                <div>
                <h1 className='join_c'>join the community</h1>
<p className='alli'>Discuss,build with, and meet thousands of starter from all around the world. </p>
<div className='social_icons d-flex gap-3'>
<div className='around_social'>
<FaFacebook className='icons_clr' />

</div>
<div className='around_social'>
<AiFillInstagram className='icons_clr' />

</div>
<div className='around_social'>
<FaLinkedinIn  className='icons_clr' />

</div>
<div className='around_social'>
<FaDiscord className='icons_clr' />

</div>


</div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
