import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import './Home.css';

export default function Home() {
  return (
    <div class="container" style={{ marginTop: 20 + 'px' }}>
      <Carousel className="slide">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://github.com/nehasaipangallu/yeption/blob/main/assets/background.PNG?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>About Slyaka</h3>
            <p>We will Develop your dream.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://github.com/nehasaipangallu/yeption/blob/main/assets/background.PNG?raw=true"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>About Us</h3>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/nehasaipangallu/yeption/blob/main/assets/background.PNG?raw=true"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Our Pricing Plans</h3>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* About US */}
      <h3>
        A Few words <b>About Us</b>
      </h3>
      <p class="row">
        <p>
          <b> History First!</b> Have you ever thought that your business needs
          a complete solution rather than a mere short-term satisfaction? Well,
          we are a group of earthly beings who always think of straight-notch
          answers without taking any shortcuts. And, thats how The Great{' '}
          <b>"Slyaka"</b>was born.
          <b>"Unique + Creative + Narrative + Innovative = Slyaka"</b>
        </p>
        <p>
          {' '}
          In a coating, Our Slyaka spots down all the agile frameworks into one
          strengthened team of Workforce. yeption is an Indian start-up company.
          We develop the human brain to reach their goal and provide
          opportunities to make their dream reality.
        </p>
        <p>
          Slyaka is a rising concern, a group of highly professional minds. We
          are available for hire in a wide range of creative displaces for a
          variety of jobs, projects, and gigs.
        </p>
      </p>
      <div class="row justify-content-end">
        <a href="#/about" class="w-auto know-more">
        <ArrowRight className="w-auto" />
        </a>
      </div>
    </div>
  );
}
