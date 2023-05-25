import React from 'react'
import ABOUT_IMAGE_DARK from './assets/image-about-dark.jpg'
import ABOUT_IMAGE_LIGHT from './assets/image-about-light.jpg'

export default function AboutComp() {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-center'>
            <div className='flex-fill'>
                <img src={ABOUT_IMAGE_DARK} alt="" className='img-responsive' />
            </div>
            <div className='flex-fill about-us-description-wrapper'>
                <p style={{ letterSpacing: '10px', textTransform: 'uppercase', fontWeight: 700 }}>About our furniture</p>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, error possimus repellendus doloremque sequi totam velit expedita omnis corrupti culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus vitae corrupti explicabo eius. Consequuntur corporis voluptatibus corrupti at exercitationem?</p>
            </div>
            <div className='flex-fill'>
                <img src={ABOUT_IMAGE_LIGHT} alt="" className='img-responsive' />
            </div>
        </div>
    )
}
