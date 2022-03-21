import React, { useState } from 'react';
import Slider from "react-slick";
import ImportFiles from "../ImportFiles";
import { Accordion } from "react-bootstrap";

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [ {
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 2, slidesToScroll: 2, initialSlide: 2
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        } ], // autoplay: true,
        autoplaySpeed: 5000, rtl: true
    };

    return (
        <div className="content">
            <div className="container">
                <div className="row pt-5 pb-5 w-100">
                    <div className="col-12">
                        <Slider { ...settings }>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slider-item d-flex flex-column justify-content-center align-content-center align-items-center">
                                <img className="img-fluid border-img-radius" src={ ImportFiles[ '1.jpg' ] } alt="کالا"/>
                                <h3>12</h3>

                                <div className="d-flex flex-row flex-wrap pb-0">
                                    <div>
                                        <a href={ '/' }>
                                            <i className="fab fa-shopify me-2"/>
                                            افزودن به سبد خرید
                                        </a>
                                    </div>
                                    <div className="ms-3">
                                        <a href={ '/' }>
                                            جزئیات
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-7 col-12">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    ساختار وب سایت
                                </Accordion.Header>
                                <Accordion.Body className="text-end">
                                    طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی
                                    صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد
                                    دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر
                                    خواهد بود.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    تکنولوژی بکار رفته
                                </Accordion.Header>
                                <Accordion.Body className="text-end">
                                    طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی
                                    صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد
                                    دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر
                                    خواهد بود.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-5 col-12 d-flex align-items-center">
                        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی
                        صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد
                        دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر
                        خواهد بود.
                    </div>
                </div>

            </div>
        </div> );
};

export default Home;