import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
        <div className="loader-wrap">
            <div className="pin"></div>
            <div className="pulse"></div>
        </div>
        <div id="main">
            <header className="main-header dark-header fs-header sticky">
                <div className="header-inner">
                    <div className="logo-holder">
                        <a href="index2.html"><img src="images/Black_and_Red_Business_Proposal_Cover_Page__6_-removebg-preview (1).png" alt=""></a>
                    </div>
                    <div className="header-search vis-header-search">
                        <div className="header-search-input-item">
                            <input type="text" placeholder="Keywords" value=""/>
                        </div>
                        <div className="header-search-select-item">
                            <select data-placeholder="All Categories" className="chosen-select" >
                                <option>All Categories</option>
                                <option>Shops</option>
                                <option>Hotels</option>
                                <option>Restaurants</option>
                                <option>Fitness</option>
                                <option>Events</option>
                            </select>
                        </div>
                        <button className="header-search-button" onclick="window.location.href='listing.html'">Search</button>
                    </div>
                    <div className="show-search-button"><i className="fa fa-search"></i> <span>Search</span></div>
                    <a href="dashboard-add-listing.html" className="add-list">Add Listing <span><i className="fa fa-plus"></i></span></a>
                    <div className="show-reg-form modal-open"><i className="fa fa-sign-in"></i>Sign In</div>
                    <div className="nav-button-wrap color-bg">
                        <div className="nav-button">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="nav-holder main-menu">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" className="act-link">Home </a>
                                    
                                </li>
                                <li>
                                    <a href="#">Listings <i className="fa fa-caret-down"></i></a>
                                    <ul>
                                        <li><a href="listing.html">Column map</a></li>
                                        <li><a href="listing2.html">Column map 2</a></li>
                                        <li><a href="listing3.html">Fullwidth Map</a></li>
                                        <li><a href="listing4.html">Fullwidth Map 2</a></li>
                                        <li><a href="listing5.html">Without Map</a></li>
                                        <li><a href="listing6.html">Without Map 2</a></li>
                                        <li>
                                            <a href="#">Single <i className="fa fa-caret-down"></i></a>
                                            <ul>
                                                <li><a href="listing-single.html">Style 1</a></li>
                                                <li><a href="listing-single2.html">Style 2</a></li>
                                                <li><a href="listing-single3.html">Style 3</a></li>
												<li><a href="listing-single4.html">Style 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">News</a>
                                </li>
                                <li>
                                    <a href="#">Pages <i className="fa fa-caret-down"></i></a>
                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="author-single.html">User single</a></li>
                                        <li><a href="how-itworks.html">How it Works</a></li>
                                        <li><a href="pricing-tables.html">Pricing</a></li>
                                        <li><a href="dashboard-myprofile.html">User Dasboard</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                                        <li><a href="404.html">404</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="header2.html">Header 2</a></li>
                                        <li><a href="footer-fixed.html">Footer Fixed</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div id="wrapper">
                <div className="content">
                    <section className="scroll-con-sec hero-section" data-scrollax-parent="true" id="sec1">
                        <div className="media-container video-parallax" data-scrollax="properties: { translateY: '200px' }">
                            <div className="bg mob-bg" style="background-image: url(images/bg/29.jpg)"></div>
                            <div className="video-container">
                                <video autoplay  loop muted  className="bgvid">
                                    <source src="video/4.mp4" type="video/mp4">
                                </video>
                            </div>

                                         <div  className="background-vimeo" data-vim="97871257"> </div> -->

                                         <div  className="background-youtube-wrapper" data-vid="Hg5iNVSp2z8" data-mv="1"> </div> -->

                        </div>
                        <div className="overlay"></div>
                        <div className="hero-section-wrap fl-wrap">
                            <div className="container">
                                <div className="intro-item fl-wrap">
                                    <h2>We will help you to find all</h2>
                                    <h3>Find great places , hotels , restourants , shops.</h3>
                                </div>
                                <div className="main-search-input-wrap">
                                    <div className="main-search-input fl-wrap">
                                        <div className="main-search-input-item">
                                            <input type="text" placeholder="What are you looking for?" value=""/>
                                        </div>
													<div className="main-search-input-item location" id="autocomplete-container">
														<input type="text" placeholder="Location" id="autocomplete-input" value=""/>
														<a href="#"><i className="fa fa-dot-circle-o"></i></a>
													</div>
                                        <div className="main-search-input-item">
                                            <select data-placeholder="All Categories" className="chosen-select" >
                                                <option>All Categories</option>
                                                <option>Shops</option>
                                                <option>Hotels</option>
                                                <option>Restaurants</option>
                                                <option>Fitness</option>
                                                <option>Events</option>
                                            </select>
                                        </div>
                                        <button className="main-search-button" onclick="window.location.href='listing.html'">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bubble-bg"> </div>
                        <div className="header-sec-link">
                            <div className="container"><a href="#sec2" className="custom-scroll-link">Let's Start</a></div>
                        </div>
                    </section>
                    <section id="sec2">
                        <div className="container">
                            <div className="section-title">
                                <h2>Featured Categories</h2>
                                <div className="section-subtitle">Catalog of Categories</div>
                                <span className="section-separator"></span>
                                <p>Explore some of the best tips from around the city from our partners and friends.</p>
                            </div>
                            <div className="gallery-items fl-wrap mr-bot spad">
                                <div className="gallery-item">
                                    <div className="grid-item-holder">
                                        <div className="listing-item-grid">
											<div className="bg"  data-bg="images/all/1.jpg"></div>
                                            <div className="listing-counter"><span>10 </span> Locations</div>
                                            <div className="listing-item-cat">
                                                <h3><a href="listing.html">Conference and Event</a></h3>
                                                <p>Constant care and attention to the patients makes good record</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-item gallery-item-second">
                                    <div className="grid-item-holder">
                                        <div className="listing-item-grid">
											<div className="bg"  data-bg="images/bg/19.jpg"></div>
                                            <div className="listing-counter"><span>6 </span> Locations</div>
                                            <div className="listing-item-cat">
                                                <h3><a href="listing.html">Cafe - Pub</a></h3>
                                                <p>Constant care and attention to the patients makes good record</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="grid-item-holder">
                                        <div className="listing-item-grid">
                                            <div className="bg"  data-bg="images/all/3.jpg"></div>
                                            <div className="listing-counter"><span>21 </span> Locations</div>
                                            <div className="listing-item-cat">
                                                <h3><a href="listing.html">Gym - Fitness</a></h3>
                                                <p>Constant care and attention to the patients makes good record</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="grid-item-holder">
                                        <div className="listing-item-grid">
                                            <div className="bg"  data-bg="images/all/22.jpg"></div>
                                            <div className="listing-counter"><span>7 </span> Locations</div>
                                            <div className="listing-item-cat">
                                                <h3><a href="listing.html">Hotels</a></h3>
                                                <p>Constant care and attention to the patients makes good record</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="grid-item-holder">
                                        <div className="listing-item-grid">
                                            <div className="bg"  data-bg="images/all/5.jpg"></div>
                                            <div className="listing-counter"><span>15 </span> Locations</div>
                                            <div className="listing-item-cat">
                                                <h3><a href="listing.html">Shop - Store</a></h3>
                                                <p>Constant care and attention to the patients makes good record</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="listing.html" className="btn  big-btn circle-btn dec-btn  color-bg flat-btn">View All<i className="fa fa-eye"></i></a>
                        </div>
                    </section>
                    <section className="gray-section">
                        <div className="container">
                            <div className="section-title">
                                <h2>Popular listings</h2>
                                <div className="section-subtitle">Best Listings</div>
                                <span className="section-separator"></span>
                                <p>Sample sample sample sample Sample sample sample sample Sample sample </p>
                            </div>
                        </div>
                        <div className="list-carousel fl-wrap card-listing ">
                            <div className="listing-carousel  fl-wrap ">
                                <div className="slick-slide-item">
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/1.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>4</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Retail</a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/5.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Lisa Smith</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Event in City Mol</a></h3>
                                                <p>Sed interdum metus at nisi tempor laoreet.  </p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="5">
                                                        <span>(7 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 27th Brooklyn New York, NY 10065</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="slick-slide-item">
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/2.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>15</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Event</a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/2.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Mark Rose</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Cafe "ABC"</a></h3>
                                                <p>Morsample sample Sample sample sample sample.</p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4">
                                                        <span>(17 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>  sample sample Sample sample sample sample</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="slick-slide-item">
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/20.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>13</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Gym </a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/4.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Nasty Wood</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Gym In Matara</a></h3>
                                                <p>sample sample Sample sample sample sample </p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="3">
                                                        <span>(16 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> Colomobo Sri lanka</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="slick-slide-item">
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/5.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>3</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Shops</a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/1.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Nasty Wood</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Shop in Kurunegala</a></h3>
                                                <p>sample sample Sample sample sample sample </p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4">
                                                        <span>(6 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 27th lane  colombo 7</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="slick-slide-item">
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/6.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>35</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Cars</a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/6.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Perera</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Best deal For the Cars</a></h3>
                                                <p>sample sample Sample sample sample sample</p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="5">
                                                        <span>(11 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 27th Alfred house avenue, ccolombo 03</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="slick-slide-item">
                                    
                                    <div className="listing-item">
                                        <article className="geodir-category-listing fl-wrap">
                                            <div className="geodir-category-img">
                                                <img src="images/all/4.jpg" alt="">
                                                <div className="overlay"></div>
                                                <div className="list-post-counter"><span>553</span><i className="fa fa-heart"></i></div>
                                            </div>
                                            <div className="geodir-category-content fl-wrap">
                                                <a className="listing-geodir-category" href="listing.html">Restaurants</a>
                                                <div className="listing-avatar"><a href="author-single.html"><img src="images/avatar/3.jpg" alt=""></a>
                                                    <span className="avatar-tooltip">Added By  <strong>Silva Fernando</strong></span>
                                                </div>
                                                <h3><a href="listing-single.html">Luxury Restourant</a></h3>
                                                <p>sample sample Sample sample sample sample.</p>
                                                <div className="geodir-category-options fl-wrap">
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="5">
                                                        <span>(7 reviews)</span>
                                                    </div>
                                                    <div className="geodir-category-location"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 27th Alfred house avenue, ccolombo 03</a></div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                            <div className="swiper-button-prev sw-btn"><i className="fa fa-long-arrow-left"></i></div>
                            <div className="swiper-button-next sw-btn"><i className="fa fa-long-arrow-right"></i></div>
                        </div>
                       
                    </section>
                    
                    <section className="color-bg">
                        <div className="shapes-bg-big"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images-collage fl-wrap">
                                        <div className="images-collage-title">Reach<span>Right</span></div>
                                        <div className="images-collage-main images-collage-item"><img src="images/avatar/1.jpg" alt=""></div>
                                        <div className="images-collage-other images-collage-item" data-position-left="23" data-position-top="10" data-zindex="2"><img src="images/avatar/2.jpg" alt=""></div>
                                        <div className="images-collage-other images-collage-item" data-position-left="62" data-position-top="54" data-zindex="5"><img src="images/avatar/4.jpg" alt=""></div>
                                        <div className="images-collage-other images-collage-item anim-col" data-position-left="18" data-position-top="70" data-zindex="11"><img src="images/avatar/6.jpg" alt=""></div>
                                        <div className="images-collage-other images-collage-item" data-position-left="37" data-position-top="90" data-zindex="1"><img src="images/avatar/5.jpg" alt=""></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="color-bg-text">
                                        <h3>Join our online community</h3>
                                        <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample.</p>
                                        <a href="#" className="color-bg-link modal-open">Sign In Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="container">
                            <div className="section-title">
                                <h2>How it works</h2>
                                <div className="section-subtitle">Discover & Connect </div>
                                <span className="section-separator"></span>
                                <p>Explore some of the best tips from around the world.</p>
                            </div>
                           
                            <div className="process-wrap fl-wrap">
                                <ul>
                                    <li>
                                        <div className="process-item">
                                            <span className="process-count">01 . </span>
                                            <div className="time-line-icon"><i className="fa fa-map-o"></i></div>
                                            <h4> Find Interesting Place</h4>
                                            <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample</p>
                                        </div>
                                        <span className="pr-dec"></span>
                                    </li>
                                    <li>
                                        <div className="process-item">
                                            <span className="process-count">02 .</span>
                                            <div className="time-line-icon"><i className="fa fa-envelope-open-o"></i></div>
                                            <h4> Contact a Few Owners</h4>
                                            <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample</p>
                                        </div>
                                        <span className="pr-dec"></span>
                                    </li>
                                    <li>
                                        <div className="process-item">
                                            <span className="process-count">03 .</span>
                                            <div className="time-line-icon"><i className="fa fa-hand-peace-o"></i></div>
                                            <h4> Make a Listing</h4>
                                            <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="process-end"><i className="fa fa-check"></i></div>
                            </div>
                           
                        </div>
                    </section>
                    <section className="parallax-section" data-scrollax-parent="true">
                        <div className="bg"  data-bg="images/bg/8.jpg" data-scrollax="properties: { translateY: '100px' }"></div>
                        <div className="overlay co lor-overlay"></div>
                        
                        <div className="container">
                            <div className="intro-item fl-wrap">
                                <h2>Visit the Best Places In Your City</h2>
                                <h3>Find great places , hotels , restourants , shops.</h3>
                                <a className="trs-btn" href="#">Add Listing + </a>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="container">
                            <div className="section-title">
                                <h2> Pricing Tables</h2>
                                <div className="section-subtitle">cost of our services</div>
                                <span className="section-separator"></span>
                                <p>Explore some of the best tips from around the city from our partners and friends.</p>
                            </div>
                            <div className="pricing-wrap fl-wrap">
                               
                                <div className="price-item">
                                    <div className="price-head op1">
                                        <h3>Freemium</h3>
                                    </div>
                                    <div className="price-content fl-wrap">
                                        <div className="price-num fl-wrap">
                                            <span className="curen">Rs.</span>
                                            <span className="price-num-item">00</span>
                                            <div className="price-num-desc">Per month</div>
                                        </div>
                                        <div className="price-desc fl-wrap">
                                            <ul>
                                                <li>One Listing</li>
                                                <li>90 Days Availability</li>
                                                <li>Non-Featured</li>
                                                <li>Limited Support</li>
                                            </ul>
                                            <a href="#" className="price-link">Choose Freemium</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="price-item best-price">
                                    <div className="price-head op2">
                                        <h3>Platinum</h3>
                                    </div>
                                    <div className="price-content fl-wrap">
                                        <div className="price-num fl-wrap">
                                            <span className="curen">Rs.</span>
                                            <span className="price-num-item">1499</span>
                                            <div className="price-num-desc">Per month</div>
                                        </div>
                                        <div className="price-desc fl-wrap">
                                            <ul>
                                                <li>Ten Listings</li>
                                                <li>Lifetime Availability</li>
                                                <li>Featured In Search Results</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <a href="#" className="price-link">Choose Platinum</a>
                                            <div className="recomm-price">
                                                <i className="fa fa-check"></i>
                                                <span className="clearfix"></span>
                                                Recommended
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="price-item">
                                    <div className="price-head">
                                        <h3>Premium</h3>
                                    </div>
                                    <div className="price-content fl-wrap">
                                        <div className="price-num fl-wrap">
                                            <span className="curen">Rs</span>
                                            <span className="price-num-item">999</span>
                                            <div className="price-num-desc">Per month</div>
                                        </div>
                                        <div className="price-desc fl-wrap">
                                            <ul>
                                                <li>Unlimited Listings</li>
                                                <li>Lifetime Availability</li>
                                                <li>Featured In Search Results</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <a href="#" className="price-link">Choose Premium</a>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                           
                        </div>
                    </section>
                    
                    <section className="color-bg">
                        <div className="shapes-bg-big"></div>
                        <div className="container">
                            <div className=" single-facts fl-wrap">
                                
                                <div className="inline-facts-wrap">
                                    <div className="inline-facts">
                                        <div className="milestone-counter">
                                            <div className="stats animaper">
                                                <div className="num" data-content="0" data-num="0">0</div>
                                            </div>
                                        </div>
                                        <h6>New Visiters Every Week</h6>
                                    </div>
                                </div>
                                
                                <div className="inline-facts-wrap">
                                    <div className="inline-facts">
                                        <div className="milestone-counter">
                                            <div className="stats animaper">
                                                <div className="num" data-content="0" data-num="0">0</div>
                                            </div>
                                        </div>
                                        <h6>Happy customers every year</h6>
                                    </div>
                                </div>
                                
                                <div className="inline-facts-wrap">
                                    <div className="inline-facts">
                                        <div className="milestone-counter">
                                            <div className="stats animaper">
                                                <div className="num" data-content="0" data-num="0">0</div>
                                            </div>
                                        </div>
                                        <h6>Won Awards</h6>
                                    </div>
                                </div>
                               
                                <div className="inline-facts-wrap">
                                    <div className="inline-facts">
                                        <div className="milestone-counter">
                                            <div className="stats animaper">
                                                <div className="num" data-content="0" data-num="0">0</div>
                                            </div>
                                        </div>
                                        <h6>New Listing Every Week</h6>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className="container">
                            <div className="section-title">
                                <h2>Testimonials</h2>
                                <div className="section-subtitle">Clients Reviews</div>
                                <span className="section-separator"></span>
                                <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample</p>
                            </div>
                        </div>
                     
                        <div className="carousel fl-wrap">
                           
                            <div className="testimonials-carousel single-carousel fl-wrap">
                                
                                <div className="slick-slide-item">
                                    <div className="testimonilas-text">
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"> </div>
                                        <p>sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample sample sample Sample sample sample sample</p>
                                    </div>
                                    <div className="testimonilas-avatar-item">
                                        <div className="testimonilas-avatar"><img src="images/avatar/4.jpg" alt=""></div>
                                        <h4>Lisa Noory</h4>
                                        <span>Restaurant Owner</span>
                                    </div>
                                </div>
                                
                                <div className="slick-slide-item">
                                    <div className="testimonilas-text">
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="4"> </div>
                                        <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample.</p>
                                    </div>
                                    <div className="testimonilas-avatar-item">
                                        <div className="testimonilas-avatar"><img src="images/avatar/3.jpg" alt=""></div>
                                        <h4>Milton jaye</h4>
                                        <span>Restaurant Owner</span>
                                    </div>
                                </div>
                               
                                <div className="slick-slide-item">
                                    <div className="testimonilas-text">
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"> </div>
                                        <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample praesent.</p>
                                    </div>
                                    <div className="testimonilas-avatar-item">
                                        <div className="testimonilas-avatar"><img src="images/avatar/1.jpg" alt=""></div>
                                        <h4>Austin Siriwardhana</h4>
                                        <span>Restaurant Owner</span>
                                    </div>
                                </div>
                                
                                <div className="slick-slide-item">
                                    <div className="testimonilas-text">
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="4"> </div>
                                        <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample.</p>
                                    </div>
                                    <div className="testimonilas-avatar-item">
                                        <div className="testimonilas-avatar"><img src="images/avatar/6.jpg" alt=""></div>
                                        <h4>Garry Colonsi</h4>
                                        <span>Restaurant Owner</span>
                                    </div>
                                </div>
                               
                            </div>
                            
                            <div className="swiper-button-prev sw-btn"><i className="fa fa-long-arrow-left"></i></div>
                            <div className="swiper-button-next sw-btn"><i className="fa fa-long-arrow-right"></i></div>
                        </div>
                       
                    </section>
            
                    <section>
                        <div className="container">
                            <div className="section-title">
                                <h2>Tips & Articles</h2>
                                <div className="section-subtitle">From the blog.</div>
                                <span className="section-separator"></span>
                                <p>Browse the latest articles from our blog.</p>
                            </div>
                            <div className="row home-posts">
                                <div className="col-md-4">
                                    <article className="card-post">
                                        <div className="card-post-img fl-wrap">
                                            <a href="blog-single.html"><img src="images/all/15.jpg"   alt=""></a>
                                        </div>
                                        <div className="card-post-content fl-wrap">
                                            <h3><a href="blog-single.html">Gallery Post</a></h3>
                                            <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample</p>
                                            <div className="post-author"><a href="#"><img src="images/avatar/4.jpg" alt=""><span>By , Alisa Noory</span></a></div>
                                            <div className="post-opt">
                                                <ul>
                                                    <li><i className="fa fa-calendar-check-o"></i> <span>25 April 2018</span></li>
                                                    <li><i className="fa fa-eye"></i> <span>264</span></li>
                                                    <li><i className="fa fa-tags"></i> <a href="#">Photography</a>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4">
                                    <article className="card-post">
                                        <div className="card-post-img fl-wrap">
                                            <a href="blog-single.html"><img  src="images/all/18.jpg"   alt=""></a>
                                        </div>
                                        <div className="card-post-content fl-wrap">
                                            <h3><a href="blog-single.html">Video and gallery post</a></h3>
                                            <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample </p>
                                            <div className="post-author"><a href="#"><img src="images/avatar/5.jpg" alt=""><span>By , Mery Lynn</span></a></div>
                                            <div className="post-opt">
                                                <ul>
                                                    <li><i className="fa fa-calendar-check-o"></i> <span>25 April 2018</span></li>
                                                    <li><i className="fa fa-eye"></i> <span>264</span></li>
                                                    <li><i className="fa fa-tags"></i> <a href="#">Design</a>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4">
                                    <article className="card-post">
                                        <div className="card-post-img fl-wrap">
                                            <a href="blog-single.html"><img  src="images/all/19.jpg"   alt=""></a>
                                        </div>
                                        <div className="card-post-content fl-wrap">
                                            <h3><a href="blog-single.html">Post Article</a></h3>
                                            <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample </p>
                                            <div className="post-author"><a href="#"><img src="images/avatar/6.jpg" alt=""><span>By , Garry Dee</span></a></div>
                                            <div className="post-opt">
                                                <ul>
                                                    <li><i className="fa fa-calendar-check-o"></i> <span>25 April 2024</span></li>
                                                    <li><i className="fa fa-eye"></i> <span>264</span></li>
                                                    <li><i className="fa fa-tags"></i> <a href="#">Stories</a>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <a href="blog.html" className="btn  big-btn circle-btn  dec-btn color-bg flat-btn">Read All<i className="fa fa-eye"></i></a>
                        </div>
                    </section>
                    
                    <section className="gradient-bg">
                        <div className="cirle-bg">
                            <div className="bg" data-bg="images/bg/circle.png"></div>
                        </div>
                        <div className="container">
                            <div className="join-wrap fl-wrap">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Do You Have Questions ?</h3>
                                        <p>We are ready to get in touch with you</p>
                                    </div>
                                    <div className="col-md-4"><a href="contacts.html" className="join-wrap-btn">Get In Touch <i className="fa fa-envelope-o"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
            </div>
            
            <footer className="main-footer dark-footer  ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>About Us</h3>
                                <div className="footer-contacts-widget fl-wrap">
                                    <p>Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample Sample sample sample sample </p>
                                    <ul  className="footer-contacts fl-wrap">
                                        <li><span><i className="fa fa-envelope-o"></i> Mail :</span><a href="#" target="_blank">inforeachrightlk@gmail.com</a></li>
                                        <li> <span><i className="fa fa-map-marker"></i> Adress :</span><a href="#" target="_blank">ReachRight solutions , R.A.De Mel Mawatha , Colombo</a></li>
                                        <li><span><i className="fa fa-phone"></i> Phone :</span><a href="#">+94 71 246 1446</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>Our Last News</h3>
                                <div className="widget-posts fl-wrap">
                                    <ul>
                                        <li className="clearfix">
                                            <a href="#"  className="widget-posts-img"><img src="images/all/1.jpg" className="respimg" alt=""></a>
                                            <div className="widget-posts-descr">
                                                <a href="#" title="">Sample sample sample</a>
                                                <span className="widget-posts-date"> 21 Mar 09.05 </span> 
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <a href="#"  className="widget-posts-img"><img src="images/all/2.jpg" className="respimg" alt=""></a>
                                            <div className="widget-posts-descr">
                                                <a href="#" title=""> Samole sample sample</a>
                                                <span className="widget-posts-date"> 7 Mar 24.21 </span> 
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-menu fl-wrap">
                                    <ul>
                                        <li><a href="#" style="color:#4DB7FE">Read All News</a></li>
                                     </ul>
                                </div>								
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget fl-wrap">
                                <h3>Subscribe</h3>
                                <div className="subscribe-widget fl-wrap">
                                    <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                                    <div className="subcribe-form">
                                        <form id="subscribe">
                                            <input className="enteremail" name="email" id="subscribe-email" placeholder="Email" spellcheck="false" type="text">
                                            <button type="submit" id="subscribe-button" className="subscribe-button"><i className="fa fa-rss"></i> Subscribe</button>
                                            <label for="subscribe-email" className="subscribe-message"></label>
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-widget fl-wrap">
                                    <div className="footer-menu fl-wrap">
                                        <ul>
                                            <li><a href="#">Home </a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer fl-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-widget">
                                    <img src="images/Black_and_Red_Business_Proposal_Cover_Page__6_-removebg-preview (1).png" alt="">
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright"> &#169; ReachRight 2024 .  All rights reserved.</div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#" target="_blank" ><i className="fa fa-facebook-official"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" target="_blank" ><i className="fa fa-chrome"></i></a></li>
                                        <li><a href="#" target="_blank" ><i className="fa fa-vk"></i></a></li>
                                        <li><a href="#" target="_blank" ><i className="fa fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="main-register-wrap modal">
                <div className="main-overlay"></div>
                <div className="main-register-holder">
                    <div className="main-register fl-wrap">
                        <div className="close-reg"><i className="fa fa-times"></i></div>
                        <h3>Sign In <span>Reach<strong>Right</strong></span></h3>
                        <div className="soc-log fl-wrap">
                            <p>For faster login or register use your social account.</p>
                            <a href="#" className="facebook-log"><i className="fa fa-facebook-official"></i>Log in with Facebook</a>
                            <a href="#" className="twitter-log"><i className="fa fa-twitter"></i> Log in with Twitter</a>
                        </div>
                        <div className="log-separator fl-wrap"><span>or</span></div>
                        <div id="tabs-container">
                            <ul className="tabs-menu">
                                <li className="current"><a href="#tab-1">Login</a></li>
                                <li><a href="#tab-2">Register</a></li>
                            </ul>
                            <div className="tab">
                                <div id="tab-1" className="tab-content">
                                    <div className="custom-form">
                                        <form method="post"  name="registerform">
                                            <label>Username or Email Address * </label>
                                            <input name="email" type="text"   onClick="this.select()" value="">
                                            <label >Password * </label>
                                            <input name="password" type="password"   onClick="this.select()" value="" >
                                            <button type="submit"  className="log-submit-btn"><span>Log In</span></button>
                                            <div className="clearfix"></div>
                                            <div className="filter-tags">
                                                <input id="check-a" type="checkbox" name="check">
                                                <label for="check-a">Remember me</label>
                                            </div>
                                        </form>
                                        <div className="lost_password">
                                            <a href="#">Lost Your Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab">
                                    <div id="tab-2" className="tab-content">
                                        <div className="custom-form">
                                            <form method="post"   name="registerform" className="main-register-form" id="main-register-form2">
                                                <label >First Name * </label>
                                                <input name="name" type="text"   onClick="this.select()" value="">
                                                <label>Second Name *</label>
                                                <input name="name2" type="text"  onClick="this.select()" value="">
                                                <label>Email Address *</label>
                                                <input name="email" type="text"  onClick="this.select()" value="">
                                                <label >Password *</label>
                                                <input name="password" type="password"   onClick="this.select()" value="" >
                                                <button type="submit"     className="log-submit-btn"  ><span>Register</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <a className="to-top"><i className="fa fa-angle-up"></i></a>
        </div>

        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/plugins.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwJSRi0zFjDemECmFl9JtRj1FY7TiTRRo&amp;libraries=places&amp;callback=initAutocomplete"></script>
    </body>

  );
}

export default App;
