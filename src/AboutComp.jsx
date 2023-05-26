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
                <p className='description'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className='flex-fill'>
                <img src={ABOUT_IMAGE_LIGHT} alt="" className='img-responsive' />
            </div>
        </div>
    )
}
