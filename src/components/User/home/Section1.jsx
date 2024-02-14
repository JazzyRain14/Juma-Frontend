import React from 'react'
import burgvideo from '../../../assets/videos/burgerVid_2.mp4'
const Section1 = () => {
    return (
        <section>
            <div className='border rounded-lg overflow-hidden relative 
            border-indigo-800 h-[500px] w-full'>
                <video
                    autoPlay 
                    loop 
                    mute='true' 
                    src={burgvideo}
                    className='absolute h-full w-full object-fill'
                />
            </div>
        </section>
    )
}

export default Section1