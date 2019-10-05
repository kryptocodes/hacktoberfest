import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import logo from '../assets/img/foss.png';
import bg from '../assets/images/hack.png';
import alogo from '../assets/img/amrita.png';
import hack from '../assets/img/hack1.svg';

const IndexPage = () => (
  <Layout>
    <div className="flex-wrapper">
    <div className="image-wrapper">
    <a href="https://agfoss.netlify.com"><img src={logo} align="left" class="scale-image"/></a>
    </div>
    <div className="image-wrapper">
    <a href="https://amrita.edu.in"><img src={alogo} align="right" class="scale-image1"/></a>
    </div>
    </div>
    <header className="masthead d-flex">
         <div className="container text-center my-auto">
         <img src={bg}/>
        <h1 className="mb-1">Amritagiri</h1>
        <h2>October 18</h2>
        <Scroll type="id" element="register" offset={100}>
          <a className="btn  btn-xl" href="#about">
            Register
          </a>
        </Scroll>
      <Scroll type="id" element="about" offset={50}>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
      </div>
      </div>
      </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="hack">
        <img src={hack}/>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              About HacktoberFest
            </h2>
            <br/>
            <p className="lead mb-5">
            HacktoberFest is an online contributing contest organised by Digital Ocean annually. It is open to everyone and anyone in the community. 
            The user can register themselves anytime between October 1 to 31 October on their <a href="https://hacktoberfest.digitalocean.com">official website</a>
            &nbsp;and make four Pull Requests before 31st.No need to worry if you're a beginner with open source or need help anywhere. 
            We at Foss@Amritagiri are organising this local meetup for you only. So, don't forget to Register and set your calenders.

<b>See you there!!</b></p>
            
          </div>
        </div>
      </div>
    </section>

    
    <section id="register" className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Let's Hack for
          <em><br/>Open Source</em>
          <em><br/>together</em>
        </h2>
        <a
          className="button"
          href="https://forms.gle/kSiMSXj1TVivP2y78"
        >
          <span>Register here</span>
        </a>
      </div>
    </section>

    
    <section id="contact" className="map">
    <div className="mapp">
    <h1>Location</h1>
    <h2>TBA</h2>
    </div>
    <iframe
      width="100%"
      height="100%"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.3517971060317!2d77.41480472917415!3d8.228518926928366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f71ade80cd81%3A0xaa938f88af79cc54!2sAmirtha+Institutions!5e1!3m2!1sen!2sin!4v1558498717706!5m2!1sen!2sin"
    ></iframe>
    <br />
    <small>
      <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.3517971060317!2d77.41480472917415!3d8.228518926928366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f71ade80cd81%3A0xaa938f88af79cc54!2sAmirtha+Institutions!5e1!3m2!1sen!2sin!4v1558498717706!5m2!1sen!2sin"></a>
    </small>
  </section>

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
