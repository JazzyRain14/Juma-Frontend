import React from 'react'
import burgerVid from '../../assets/Videos/burgerVid_2.mp4'
const Section2 = () => {
    return (
        <>
            <div className='
            h-[450px]
            w-full
            flex
            justify-center
            '>
                <video
                    className='h-full'
                    autoPlay muted loop
                    style={{ clipPath: 'polygon(0% 15%, 10% 15%, 10% 0%, 90% 0%, 90% 15%, 100% 15%, 100% 85%, 100% 85%, 100% 100%, 10% 100%, 10% 85%, 0% 85%)'}}
                    src={burgerVid}></video>
            </div>
        </>
    )
}

export default Section2