import React from 'react'
import ProductsPage from '../products/ProductsPage'

const HomePage = () => {
    return (
        <>
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close"></i></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Fresh & Organic</p>
                                    <h1>Delicious Mango Fruits</h1>
                                    <div className="hero-btns">
								<a href="products" className="boxed-btn">Buy Mangoes</a>
							</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> Products</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <ProductsPage />
                    </div>
                </div>
            </div>

            <div className="abt-section  pt-80 pb-80 " id="aboutus">
                <div className="section-title text-center">
                    <h3><span className="orange-text"></span>About Us</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-bg">
                                <img src="assets/img/Mango.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-text">
                                <h2>We are <span className="orange-text">The Mango Mart</span></h2>
                                <p>The Evergreen Mango Orchard is located at Jashapur (Gir), Talala (Gir) of Gir Somnath
                                    district (Gujarat). The farm is well known for the production and sale of Gir Kesar Mangoes.
                                    It is 20 kms away from the Gir National Park. The Gir Kesar Mango received the GI tag in
                                    2011. The Evergreen Mango Orchard is a 30 years old and leading firm in the area. Moreover,
                                    it is an APEDA approved farm selling certified GI tagged mangoes. The farm strictly follows
                                    the guidelines of global GAP (export quality) regarding international standards.</p>
                                <p>The farm is free from harmful insecticides, cultar or any other restricted pesticides. Thus,
                                    it produces residue free commodities. They follow Integrated Nutrient Management (INM) &
                                    Integrated Pest Management (IPM) in the farm for the production of export quality mangoes.
                                    These mangoes are happily and readily available in 15 different countries. Our mangoes'
                                    moto: Mango-Never Let A Man-Go.!</p> <a href="about.html" className="boxed-btn mt-4">know
                                        more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-80 pb-80 container">
                <div className="section-title text-center">
                    <h3><span className="orange-text"></span>Why you are choose</h3>
                </div>

                <div className="col-md-12">
                    <ul style={{ fontWeight: 600 }}>
                        <li>30 years old orchards</li>
                        <li>GI tag certifed produce</li>
                        <li>APEDA approved Mango Farms</li>
                        <li>Guidelines of Good Agricultural Practices followed</li>
                        <li>Near to Gir National
                            Park (The Natural taste)</li>
                        <li>Natural Farming
                            Practices followed</li>
                        <li>Free from Harmful
                            Pesticidal sprays</li>
                        <li>Free from Cultar spray (Natural flowering & Fruiting )</li>
                        <li>Export Quality & Carbide free Production.
                        </li>
                        <li>Usages of Ecofriendly Packaging materials</li>
                        <li>Hand picking of produce</li>
                        <li>Door to Door DeliveryUsages of Ecofriendly Packaging materials</li>

                    </ul>
                </div>
            </section>
            <div className="list-section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box  align-items-center" >
                                <div className="list-icon">
                                    {/* <i className="fas fa-shipping-fast"></i> */}
                                    <img className="icon-height" src="assets/img/fresh.png" />
                                </div>
                                <div className="content">
                                    <h3>Farm fresh delivered </h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box  align-items-center" >
                                <div className="list-icon">
                                    <img className="icon-height" src="assets/img/export.png" />
                                </div>
                                <div className="content">
                                    <h3>Premium-export quality </h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="list-box  align-items-center" >
                                <div className="list-icon">
                                    <img className="icon-height" src="assets/img/natural.png" />
                                </div>
                                <div className="content">
                                    <h3>Natural & chemical free</h3>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="list-box   align-items-center" >
                                <div className="list-icon">
                                    <img className="icon-height" src="assets/img/delivery.png" />
                                </div>
                                <div className="content">
                                    <h3>Faster delivery</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="gallery" className="pt-80 pb-80">
                <div className="container">
                    <div className="section-title text-center">
                        <h3><span className="orange-text"></span> Gallery</h3>
                    </div>
                    <div id="image-gallery">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/1.jpg"><img src="assets/img/products/1.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/2.jpg"><img src="assets/img/products/2.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/3.jpg"><img src="assets/img/products/3.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/4.jpg"><img src="assets/img/products/4.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/5.jpg"><img src="assets/img/products/5.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/6.jpg"><img src="assets/img/products/6.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/7.jpg"><img src="assets/img/products/7.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
                                <div className="img-wrapper">
                                    <a href="assets/img/products/8.jpg"><img src="assets/img/products/8.jpg"
                                        className="img-responsive" /></a>
                                    <div className="img-overlay">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-80 pb-80 container">
                <div className="section-title text-center">
                    <h3><span className="orange-text"></span>Brochure</h3>
                </div>

                <div className="col-md-12">

                    <div className="row">
                        <div className="col-md-3">
                            <img src="assets/img/01 brochure.png" style={{ height: "400px" }} />
                        </div>

                        <div className="col-md-3">
                            <img src="assets/img/02 brochur.png" style={{ height: "400px" }} />
                        </div>

                        <div className="col-md-3">
                            <img src="assets/img/03 brochure.png" style={{ height: "400px" }} />
                        </div>

                        <div className="col-md-3">
                            <img src="assets/img/04 brochure.png" style={{ height: "400px" }} />
                        </div>
                    </div>


                </div>

                <div className="col-lg-12 text-center">
                    <a className="boxed-btn mt-4" href="assets/img/The Mango Mart Brochure.pdf" download> Get Brochure</a>
                </div>
            </section>

            {/* logo carousel */}
            <div className="logo-carousel-section pt-80 pb-80" id="Certificate">
                <div className="section-title text-center">
                    <h3><span className="orange-text"></span>Certificate</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{ display: "flex", overflowX: "scroll", gap: "20px" }} className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/team/1.jpg" alt="" />
                                </div>

                                <div className="single-logo-item">
                                    <img src="assets/img/team/3.jpg" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/team/4.jpg" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/team/5.jpg" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/team/6.jpg" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/team/7.jpg" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/team/8.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* whatsapp start */}
            <a href="https://wa.me/9662593565" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>

        </>
    )
}

export default HomePage