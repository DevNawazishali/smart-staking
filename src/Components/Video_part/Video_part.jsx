import React from 'react'

export default function Video_part() {
  return (
    <div className='main_video_part'>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <video autoPlay className='w-100' controls loop>
    <source src="intro.mp4" type="video/mp4"/>
    {/* Your browser does not support the video tag. */}
</video>


            </div>
        </div>
    </div>
    
    </div>
  )
}
