import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import BuyButton from '../BuyButton'

import api from '../../services/api'

export default function Products(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const res_products = await api.get('products');
            setProducts(res_products.data);
        }
        loadProducts();
    }, []);

    function Prices(props) {
        const promotion = JSON.stringify(props.promotion);
        const regular = JSON.stringify(props.regular)

        const promotionFormated = promotion.substr(0, promotion.length - 2) + ',' + promotion.substr(-2);
        const regularFormated = regular.substr(0, regular.length - 2) + ',' + regular.substr(-2);

        if (promotion > 0) {
            return (
                <>
                    <p className="product__prices--promotion">de R$ {promotionFormated}</p>
                    <p className="product__prices--regular">por R$ {regularFormated}</p>
                </>
            )
        } else return <p className="product__prices--regular no-promotion">por R$ {regularFormated}</p>
    }

    function PriceHandling(value) {
        value = value.toString();
        let vformated = value.substr(0, value.length - 2) + ',' + value.substr(-2);
        return vformated
    }

    function RatingStars(rate, pid) {
        let structure = []
        for (let i = 1; i <= 5; i++) {
            rate >= i ?
                structure[i - 1] = <span key={pid + i}><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F" key={pid + i} /></svg></span> :
                structure[i - 1] = <span key={pid + i}><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69477 7.70161L3.55353 8.89634L4.12301 6.64371L2.23234 5.12792L4.72666 4.92792L5.69477 2.80687L6.66857 4.93319L9.16289 5.13319L7.27222 6.64897L7.8417 8.90161L5.69477 7.70161Z" fill="#F8475F" /></svg></span>
        }
        return <>
            {structure}
        </>
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style }}
            onClick={onClick}
          >
            <svg width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1115 10.1416L3.3212 0.351461C3.09476 0.124845 2.79249 0 2.47018 0C2.14788 0 1.8456 0.124845 1.61917 0.351461L0.89818 1.07227C0.42903 1.54195 0.42903 2.30533 0.89818 2.7743L9.11932 10.9954L0.889058 19.2257C0.662621 19.4523 0.537598 19.7544 0.537598 20.0765C0.537598 20.399 0.662621 20.7011 0.889058 20.9279L1.61004 21.6485C1.83666 21.8752 2.13876 22 2.46106 22C2.78337 22 3.08564 21.8752 3.31208 21.6485L13.1115 11.8495C13.3385 11.6222 13.4631 11.3186 13.4624 10.996C13.4631 10.6721 13.3385 10.3687 13.1115 10.1416Z"/>
            </svg>

        </button>
        );
    }


    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style }}
            onClick={onClick}
          >
            <svg width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.88085 11.0047L13.111 2.77415C13.3376 2.54806 13.4623 2.24579 13.4623 1.92348C13.4623 1.60099 13.3376 1.29889 13.111 1.07246L12.3898 0.351642C12.1636 0.124846 11.8611 0 11.5388 0C11.2165 0 10.9144 0.124846 10.688 0.351642L0.888651 10.1508C0.661318 10.3779 0.53683 10.6814 0.537725 11.0041C0.53683 11.3282 0.661139 11.6314 0.888651 11.8587L10.6788 21.6484C10.9053 21.8752 11.2074 22 11.5299 22C11.8522 22 12.1543 21.8752 12.3809 21.6484L13.1019 20.9275C13.571 20.4584 13.571 19.6946 13.1019 19.2257L4.88085 11.0047Z"/>
            </svg>

        </button>
        );
    }
    
    const settings = {
        dots: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="showcase">
            <div className="showcase__container">
                <h2 className="showcase__title">{props.name}</h2>

                <ul className="showcase__list">
                    <Slider {...settings}>
                        {products.map((item, index) => (
                            <li className="product" key={item.productId}>
                                <div className="product__figure">
                                    {item.listPrice != null ?
                                        <span className="product__seal">
                                            <p>OFF</p>
                                        </span>
                                        : ''
                                    }
                                    <img src={item.imageUrl} alt={item.productName} />
                                </div>

                                <div className="product__info">
                                    <h3 className="product__name">{item.productName}</h3>
                                    <div className="product__rating">
                                        {RatingStars(item.stars, index)}
                                    </div>
                                    <div className="product__prices">
                                        <Prices promotion={item.listPrice} regular={item.price} />
                                        {item.installments[0] != null ?
                                            <p className="product__prices--installments">
                                                ou em {item.installments[0].quantity}x de R$ {PriceHandling(item.installments[0].value)}
                                            </p>
                                            : ''
                                        }
                                    </div>
                                    <BuyButton />
                                </div>
                            </li>
                        ))}
                    </Slider>
                </ul>
            </div>
        </div>
    )
}
