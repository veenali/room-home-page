import React from 'react'
import { Carousel } from 'react-bootstrap'
import DESKTOP_IMAGE_HERO_1 from './assets/desktop-image-hero-1.jpg'
import DESKTOP_IMAGE_HERO_2 from './assets/desktop-image-hero-2.jpg'
import DESKTOP_IMAGE_HERO_3 from './assets/desktop-image-hero-3.jpg'
import ICON_ARROW from './assets/icon-arrow.svg'

export default function CarouselComp() {
    return (
        <div>
            <Carousel slide={false} interval={3000} controls={false} indicators={false} pause='hover'>
                <Carousel.Item>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <img
                            className="d-block w-100 img-responsive flex-fill"
                            src={DESKTOP_IMAGE_HERO_1}
                            alt="First slide"
                        />
                        <div className='flex-fill carousel-description-wrapper'>
                            <h1 style={{ lineHeight: '40px' }}>Discover innovative ways to decorate</h1>
                            <p className='mt-4 description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, error possimus repellendus doloremque sequi totam velit expedita omnis corrupti culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus vitae corrupti explicabo eius. Consequuntur corporis voluptatibus corrupti at exercitationem?</p>
                            <p className='shop-now-button' style={{ letterSpacing: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                                SHOP NOW
                                <span><img src={ICON_ARROW} alt="Left arrow" /></span>
                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <img
                            className="d-block w-100 img-responsive flex-fill"
                            src={DESKTOP_IMAGE_HERO_2}
                            alt="First slide"

                        />
                        <div className='flex-fill carousel-description-wrapper' >
                            <h1 style={{ lineHeight: '40px' }}>We are available all across the globe</h1>
                            <p className='mt-4 description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, error possimus repellendus doloremque sequi totam velit expedita omnis corrupti culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus vitae corrupti explicabo eius. Consequuntur corporis voluptatibus corrupti at exercitationem?</p>
                            <p className='shop-now-button' style={{ letterSpacing: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                                SHOP NOW
                                <span><img src={ICON_ARROW} alt="Left arrow" /></span>
                            </p></div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <img
                            className="d-block w-100 img-responsive flex-fill"
                            src={DESKTOP_IMAGE_HERO_3}
                            alt="First slide"
                        />
                        <div className='flex-fill carousel-description-wrapper' >
                            <h1 style={{ lineHeight: '40px' }}>Manufactured with the best material</h1>
                            <p className='mt-4 description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, error possimus repellendus doloremque sequi totam velit expedita omnis corrupti culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus vitae corrupti explicabo eius. Consequuntur corporis voluptatibus corrupti at exercitationem?</p>
                            <p className='shop-now-button' style={{ letterSpacing: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                                SHOP NOW
                                <span><img src={ICON_ARROW} alt="Left arrow" /></span>
                            </p></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
