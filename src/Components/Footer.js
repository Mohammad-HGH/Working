import React from 'react';


export default function Footer() {
    return (

        <footer class="page-footer font-small mdb-color lighten-3 pt-4">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1 text-md-end text-center">
                        <div className="map-responsive">
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */ }
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.9454216431955!2d51.439207083520444!3d35.80261299752078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05e794884d93%3A0x494ac4b100bfed70!2sTehran%20Province%2C%20Tehran%2C%20Ramezani%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1647785638743!5m2!1sen!2s"
                                allowFullScreen="true" loading="lazy"/>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 text-md-end text-center">


                        <h5 class="font-weight-bold text-uppercase">About</h5>
                        <hr size="4" className="d-none d-md-block"/>
                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <a href="#!">PROJECTS</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">ABOUT US</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">BLOG</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">AWARDS</a>
                                </p>
                            </li>
                        </ul>

                    </div>
                    <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1 text-md-end text-center">


                        <h5 class="font-weight-bold text-uppercase">Address</h5>
                        <hr size="4" className="d-none d-md-block"/>
                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <i class="fas fa-home mr-3"/> New York, NY 10012, US</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-envelope mr-3"/> info@example.com</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-phone mr-3"/> + 01 234 567 88</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-print mr-3"/> + 01 234 567 89</p>
                            </li>
                        </ul>

                    </div>
                    <div class="col-md-2 col-lg-2 text-md-end text-center mx-auto my-4">


                        <h5 class="font-weight-bold text-uppercase">Follow Us</h5>

                        <hr size="4" className="d-none d-md-block"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a type="button" class="btn-floating btn-fb">
                            <i class="fab fa-facebook-f"/>
                        </a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a type="button" class="btn-floating btn-tw">
                            <i class="fab fa-twitter"/>
                        </a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a type="button" class="btn-floating btn-gplus">
                            <i class="fab fa-google-plus-g"/>
                        </a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                        <a type="button" class="btn-floating btn-dribbble">
                            <i class="fab fa-dribbble"/>
                        </a>

                    </div>
                </div>


            </div>


            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>


        </footer>

    );
};
