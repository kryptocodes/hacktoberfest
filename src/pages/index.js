import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

const IndexPage = () => (
  <Layout>

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="services" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            Register
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              About Hacktoberfest
            </h2>
            <p className="lead mb-5">
            Hacktoberfest is an annual event across all of GitHub which is meant to encourage developers to contribute to open source projects.
            </p>
            
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Services</h3>
          <h2 className="mb-5">What We Offer</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-smartphone"></i>
            </span>
            <h4>
              <strong>Responsive</strong>
            </h4>
            <p className="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-pencil"></i>
            </span>
            <h4>
              <strong>Redesigned</strong>
            </h4>
            <p className="text-faded mb-0">
              Freshly redesigned for Bootstrap 4.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-like"></i>
            </span>
            <h4>
              <strong>Favorited</strong>
            </h4>
            <p className="text-faded mb-0">
              Millions of users
              <i className="fas fa-heart"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-mustache"></i>
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p className="text-faded mb-0">I mustache you a question...</p>
          </div>
        </div>
      </div>
    </section>

    <section className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Welcome to
          <em>your</em>
          next website!
        </h2>
        <a
          className="btn btn-primary btn-xl"
          href="https://github.com/anubhavsrivastava/gatsby-starter-stylish"
        >
          Download Now!
        </a>
      </div>
    </section>

    
     <section id="contact" className="map">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      ></iframe>
      <br />
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>
    </section>

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
