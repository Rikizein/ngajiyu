import React from "react";
import { IndexLink, Link } from "react-router";


export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  // toggleCollapse() {
  //   const collapsed = !this.state.collapsed;
  //   this.setState({collapsed});
  // }

  render() {
    const styles={
      color: "#fff",
    }
    const styleCursor={
      cursor: "pointer",
    }
    return (

      	<nav className="navbar navbar-inverse navbar-fixed-top">
  			<div className="container-fluid">

  				<div className="navbar-header">
  					<a className="nav-btn btn-dark btn-lg accordion-toggle pull-left" title="Follow Us" role="tab" id="social-collapse" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></a>
  					<a id="menu-toggle" href="#" className="nav-btn btn-dark btn-lg toggle">
  						<i className="fa fa-bars" style={styles}></i>
  					</a>
  					<a id="to-top" className="btn btn-lg btn-inverse" href="#top">
  						<span className="sr-only">Toggle to Top Navigation</span>
  						<i className="fa fa-chevron-up"></i>
  					</a>
  				</div>

                  <div className="collapse navbar-collapse js-navbar-collapse">
                  		<ul className="nav navbar-nav navbar-left">
                  			<a className="navbar-brand" href="#">
                  						<img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB+0lEQVR4AcyYg5LkUBhG+1X2PdZGaW3btm3btm3bHttWrPomd1r/2Jn/VJ02TpxcH4CQ/dsuazWgzbIdrm9dZVd4pBz4zx2igTaFHrhvjneVXNHCSqIlFEjiwMyyyOBilRgGSqLNF1jnwNQdIvAt48C3IlBmHCiLQHC2zoHDu6zG1iXn6+y62ScxY9AODO6w0pvAqf23oSE4joOfH6OxfMoRnoGUm+de8wykbFt6wZtA07QwtNOqKh3ZbS3Wzz2F+1c/QJY0UCJ/J3kXWJfv7VhxCRRV1jGw7XI+gcO7rEFFRvdYxydwcPsVsC0bQdKScngt4iUTD4Fy/8p7PoHzRu1DclwmgmiqgUXjD3oTKHbAt869qdJ7l98jNTEblPTkXMwetpvnftA0LLHb4X8kiY9Kx6Q+W7wJtG0HR7fdrtYz+x7iya0vkEtUULIzCjC21wY+W/GYXusRH5kGytWTLxgEEhePPwhKYb7EK3BQuxWwTBuUkd3X8goUn6fMHLyTT+DCsQdAEXNzSMeVPAJHdF2DmH8poCREp3uwm7HsGq9J9q69iuunX6EgrwQVObjpBt8z6rdPfvE8kiiyhsvHnomrQx6BxYUyYiNS8f75H1w4/ISepDZLoDhNJ9cdNUquhRsv+6EP9oNH7Iff2A9g8h8CLt1gH0Qf9NMQAFnO60BJFQe0AAAAAElFTkSuQmCC" className="img-responsive pull-left" alt="Responsive image" />
                  					 Bootstrap Custom Navbar</a>
                  			<li className="dropdown mega-dropdown">
                  				<a href="#" className="dropdown-toggle" data-toggle="dropdown">Men <span className="caret"></span></a>
                  				<ul className="dropdown-menu mega-dropdown-menu">
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Men Collection</li>
                                              <div id="menCollection" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                  <div className="item active">
                                                      <a href="#"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
                                                      <h4><small>Summer dress floral prints</small></h4>
                                                      <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                  <div className="item">
                                                      <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
                                                      <h4><small>Gold sandals with shiny touch</small></h4>
                                                      <button className="btn btn-primary" type="button">9,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                  <div className="item">
                                                      <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
                                                      <h4><small>Denin jacket stamped</small></h4>
                                                      <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                </div>

                                                <a className="left carousel-control" href="#menCollection" role="button" data-slide="prev">
                                                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                  <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="right carousel-control" href="#menCollection" role="button" data-slide="next">
                                                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                  <span className="sr-only">Next</span>
                                                </a>
                                              </div>
                                              <li className="divider"></li>
                                              <li><a href="#">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                  						</ul>
                  					</li>
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Features</li>
                  							<li><a href="#">Auto Carousel</a></li>
                                              <li><a href="#">Carousel Control</a></li>
                                              <li><a href="#">Left & Right Navigation</a></li>
                  							<li><a href="#">Four Columns Grid</a></li>
                  							<li className="divider"></li>
                  							<li className="dropdown-header">Fonts</li>
                                              <li><a href="#">Glyphicon</a></li>
                  							<li><a href="#">Google Fonts</a></li>
                  						</ul>
                  					</li>
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Plus</li>
                  							<li><a href="#">Navbar Inverse</a></li>
                  							<li><a href="#">Pull Right Elements</a></li>
                  							<li><a href="#">Coloured Headers</a></li>
                  							<li><a href="#">Primary Buttons & Default</a></li>
                  						</ul>
                  					</li>
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Much more</li>
                                              <li><a href="#">Easy to Customize</a></li>
                  							<li><a href="#">Calls to action</a></li>
                  							<li><a href="#">Custom Fonts</a></li>
                  							<li><a href="#">Slide down on Hover</a></li>
                  						</ul>
                  					</li>
                  				</ul>
                  			</li>
                              <li className="dropdown mega-dropdown">
                      			<a href="#" className="dropdown-toggle" data-toggle="dropdown">Women <span className="caret"></span></a>
                  				<ul className="dropdown-menu mega-dropdown-menu">
                  					<li className="col-sm-3">
                      					<ul>
                  							<li className="dropdown-header">Features</li>
                  							<li><a href="#">Auto Carousel</a></li>
                                              <li><a href="#">Carousel Control</a></li>
                                              <li><a href="#">Left & Right Navigation</a></li>
                  							<li><a href="#">Four Columns Grid</a></li>
                  							<li className="divider"></li>
                  							<li className="dropdown-header">Fonts</li>
                                              <li><a href="#">Glyphicon</a></li>
                  							<li><a href="#">Google Fonts</a></li>
                  						</ul>
                  					</li>
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Plus</li>
                  							<li><a href="#">Navbar Inverse</a></li>
                  							<li><a href="#">Pull Right Elements</a></li>
                  							<li><a href="#">Coloured Headers</a></li>
                  							<li><a href="#">Primary Buttons & Default</a></li>
                  						</ul>
                  					</li>
                  					<li className="col-sm-3">
                  						<ul>
                  							<li className="dropdown-header">Much more</li>
                                              <li><a href="#">Easy to Customize</a></li>
                  							<li><a href="#">Calls to action</a></li>
                  							<li><a href="#">Custom Fonts</a></li>
                  							<li><a href="#">Slide down on Hover</a></li>
                  						</ul>
                  					</li>
                                      <li className="col-sm-3">
                      					<ul>
                  							<li className="dropdown-header">Women Collection</li>
                                              <div id="womenCollection" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                  <div className="item active">
                                                      <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
                                                      <h4><small>Summer dress floral prints</small></h4>
                                                      <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                  <div className="item">
                                                      <a href="#"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
                                                      <h4><small>Gold sandals with shiny touch</small></h4>
                                                      <button className="btn btn-primary" type="button">9,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                  <div className="item">
                                                      <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
                                                      <h4><small>Denin jacket stamped</small></h4>
                                                      <button className="btn btn-primary" type="button">49,99 €</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                  </div>
                                                </div>

                                                <a className="left carousel-control" href="#womenCollection" role="button" data-slide="prev">
                                                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                  <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="right carousel-control" href="#womenCollection" role="button" data-slide="next">
                                                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                  <span className="sr-only">Next</span>
                                                </a>
                                              </div>
                                              <li className="divider"></li>
                                              <li><a href="#">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                  						</ul>
                  					</li>
                  				</ul>
                  			</li>
                              <li><a href="#">Store locator</a></li>
                  		</ul>
                          <ul className="nav navbar-nav navbar-right">
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li className="divider"></li>
                              <li><a href="#">Separated link</a></li>
                            </ul>
                          </li>
                          <li><a href="#">My cart (0) items</a></li>
                        </ul>
                  	</div>
  			</div>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <a id="menu-close" href="#" className="btn btn-danger pull-right hidden-md hidden-lg toggle"><i className="fa fa-times"></i></a>
            <li className="sidebar-brand">
              <a href="#top">Soldier-up <strong>Designs</strong></a>
            </li>
            <li>
              <a href="/" title="Go to Top">Home</a>
            </li>
            <li>
              <a href="/about" title="Go to About Us section">About</a>
            </li>
            <li>
              <a href="/resume" title="Navigate to Jonathan Adcox IT Resume">Resume</a>
            </li>
            <li>
              <a href="/portfolio" title="Navigate to 'Our Services' section">Portfolio</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog" title="Our Blog">Blog</a>
            </li>
            <li>
              <a data-toggle="modal" data-href="#loginModal" data-target="#loginModal" style={styleCursor}> Hosting</a>
            </li>
          </ul>
        </nav>
  		</nav>


    );
  }
}
