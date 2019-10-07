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
    <a href="https://agfoss.tech"><img src={logo} align="left" class="scale-image"/></a>
    </div>
    <div className="image-wrapper">
    <a href="https://amrita.edu.in"><img src={alogo} align="right" class="scale-image1"/></a>
    </div>
    </div>
    <header className="masthead d-flex">
         <div className="container text-center my-auto">
         <img src={bg}/>
         <div ClassName="group">
        <h1 className="mb-1">Amritagiri</h1>
        <h2>October 18</h2>  
          <a className="btn  btn-xl" href="https://forms.gle/kSiMSXj1TVivP2y78">
            Register
          </a>
      <Scroll type="id" element="about" offset={50}>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
      </div>
      </div>
      </Scroll>
      </div>
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

    
    
    <section id="venue" className="venue-details">
      <div className="row m-0 w-100">
        <div className="col-lg-8 order-2 p-4">
          <iframe
            className="location-map"
            src="https://maps.google.com/maps?q=Amrita%20college%20of%20engineering%20and%20technology&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen={false}
          >
          </iframe>
        </div>
        <div className="col p-4">
          <h2>Venue</h2>
          <h3>Amrita College of Engineering and Technology,</h3>
          <div className="fs-5">
          Erachakulam,Nagercoil,
          </div>
          <div className="fs-6">
          Tamilnadu, India - 629 901
          </div>
        </div>
      </div>
    </section>
    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
