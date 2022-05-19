import React from 'react'
import Slider from "react-slick";

// import './styles.css'

export default function Fullbanner() {
    let fullbannerimg = '';
    window.innerWidth > 991 ?
        fullbannerimg = '/assets/img/fullbanner.png' :
        fullbannerimg = '/assets/img/fullbannerMobile.png'

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="fullbanner">
            <ul className="fullbanner__list">
                <Slider {...settings}>
                    <li className="fullbanner__item">
                        <img className="fullbanner__image" src={fullbannerimg} alt="Criar ou migrar seu e-commerce?" />
                    </li>
                    <li className="fullbanner__item">
                        <img className="fullbanner__image" src={fullbannerimg} alt="Criar ou migrar seu e-commerce?" />
                    </li>
                </Slider>

            </ul>
        </div>
    );
}
