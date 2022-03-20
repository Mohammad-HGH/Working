import React from 'react';
import Slider from "react-slick";
import ImportFiles from "../ImportFiles";

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
                <div className="row">
                    <div className="col-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis deleniti ex, hic
                        id, in ipsa magnam modi molestias mollitia perferendis perspiciatis quaerat recusandae veniam
                        voluptatem? Dolore labore maiores perspiciatis.
                    </div>
                    <div className="col-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in inventore ipsam magni
                        nesciunt quibusdam sit soluta totam. Iusto minus optio quas quia saepe! Blanditiis maiores
                        placeat recusandae reiciendis vitae!
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur
                        culpa cumque doloribus, dolorum enim eos exercitationem fugit, inventore iure minima pariatur
                        provident reiciendis rerum saepe tempore temporibus ullam!
                    </div>
                    <div className="col-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, architecto cupiditate
                        doloremque dolorum eum expedita harum minima natus nostrum numquam obcaecati optio praesentium
                        reiciendis repudiandae rerum sapiente suscipit tenetur ullam.
                    </div>
                </div>
            </div>
        </div> );
};

export default Home;