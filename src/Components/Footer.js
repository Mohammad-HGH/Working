import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';


export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted'>
            <div className="border-bottom">
                <section className='container d-flex justify-content-center justify-content-lg-between p-4'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-facebook-f'/>

                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-twitter'/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-google'/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-instagram'/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-linkedin'/>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='' className='me-4 text-reset'>
                            <i className='fab fa-github'/>
                        </a>
                    </div>
                </section>
            </div>
            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-style'>
                            <div className="map-responsive">
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */ }
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.9454216431955!2d51.439207083520444!3d35.80261299752078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05e794884d93%3A0x494ac4b100bfed70!2sTehran%20Province%2C%20Tehran%2C%20Ramezani%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1647785638743!5m2!1sen!2s"
                                    allowFullScreen="true" loading="lazy"/>
                            </div>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-style'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                صفحات
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Angular
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-style'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-style'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> New York, NY 10012, US
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                info@example.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={ { backgroundColor: 'rgba(0, 0, 0, 0.05)' } }>
                © طراحی و توسعه: &nbsp;
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    محمد
                </a>
            </div>
        </MDBFooter>
    );
};
