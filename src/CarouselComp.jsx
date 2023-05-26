import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import DESKTOP_IMAGE_HERO_1 from './assets/desktop-image-hero-1.jpg'
import DESKTOP_IMAGE_HERO_2 from './assets/desktop-image-hero-2.jpg'
import DESKTOP_IMAGE_HERO_3 from './assets/desktop-image-hero-3.jpg'
import ICON_ARROW from './assets/icon-arrow.svg'
import ICON_ANGLE_ARROW_LEFT from './assets/icon-angle-left.svg'
import ICON_ANGLE_ARROW_RIGHT from './assets/icon-angle-right.svg'


export default function CarouselComp() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (slideDirection, slideIndex) => {
        if (slideDirection === 'prev') {
            if (slideIndex === 0) {
                setActiveSlide(carouselData.length - 1)
            } else {
                setActiveSlide(slideIndex - 1)
            }
        } else if (slideDirection === 'next') {
            setActiveSlide((slideIndex + 1) % 3)
        }
    };

    const carouselData = [
        {
            image: DESKTOP_IMAGE_HERO_1,
            description_header: "Discover innovative ways to decorate",
            description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            image: DESKTOP_IMAGE_HERO_2,
            description_header: "We are available all across the globe",
            description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            image: DESKTOP_IMAGE_HERO_3,
            description_header: "Manufactured with the best materials",
            description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]
    return (
        <div>
            <Carousel activeIndex={activeSlide} slide={false} interval={1000} controls={false} indicators={false} pause='hover'>
                {
                    carouselData?.map((data, index) => {
                        return (
                            <Carousel.Item>
                                <div className='d-flex flex-column flex-md-row align-items-center justify-content-center' style={{ position: 'relative' }}>
                                    <div className="flex-fill" style={{ position: 'relative', minWidth: '60%' }}>
                                        <img
                                            className="d-block w-100 img-responsive"
                                            src={data.image}
                                            alt="First slide"
                                        />
                                        <div className='carousel-button carousel-left-button' onClick={() => handleSlideChange('prev', index)}>
                                            <img src={ICON_ANGLE_ARROW_LEFT} alt="" />
                                        </div>
                                        <div className='carousel-button carousel-right-button' onClick={() => handleSlideChange('next', index)}>
                                            <img src={ICON_ANGLE_ARROW_RIGHT} alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-description-wrapper flex-fill">
                                        <h1 style={{ lineHeight: '40px' }}>{data.description_header}</h1>
                                        <p className='mt-4 description'>{data.description}</p>
                                        <p className='shop-now-button' style={{ letterSpacing: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                                            SHOP NOW
                                            <span><img src={ICON_ARROW} alt="Left arrow" /></span>
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>

                        )
                    })
                }
            </Carousel>
        </div>
    )
}
