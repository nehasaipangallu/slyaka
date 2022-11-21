import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './About.css';

export default function About() {
  return (
    <div class="container" style={{ marginTop: 20 + 'px' }}>
      <h4>About Us</h4>
      <p class="row gy-2">
        <p class="text-start text-break">
          <b> History First!</b> Have you ever thought that your business needs
          a complete solution rather than a mere short-term satisfaction? Well,
          we are a group of earthly beings who always think of straight-notch
          answers without taking any shortcuts. And, thats how The Great
          <strong>"Slyaka"</strong> was born.
          <p class="text-start fw-bold">
            "Unique + Creative + Narrative + Innovative = Slyaka"
          </p>
        </p>
        <p class="text-start text-break">
          In a coating, Our Slyaka spots down all the agile frameworks into one
          strengthened team of Workforce. yeption is an Indian start-up company.
          We develop the human brain to reach their goal and provide
          opportunities to make their dream reality.
        </p>
        <p class="text-start text-break">
          Slyaka is a rising concern, a group of highly professional minds. We
          are available for hire in a wide range of creative displaces for a
          variety of jobs, projects, and gigs.
        </p>
        

        {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header> web development</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Mobile app development</Accordion.Header>
            <Accordion.Body>Mobile app development</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Android app development</Accordion.Header>
            <Accordion.Body>Android app development</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>iOS app development</Accordion.Header>
            <Accordion.Body>iOS app development</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Desktop application and development
            </Accordion.Header>
            <Accordion.Body>Desktop application and development</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Digital marketing and branding</Accordion.Header>
            <Accordion.Body>Digital marketing and branding</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>IT consulting</Accordion.Header>
            <Accordion.Body>IT consulting</Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

        <p class="text-start text-break">
          We develop innovative and artistic products and services that provide
          total communication and knowledge solutions. Our business philosophy
          is to confirm the very greatest top quality, total client
          satisfaction, timely delivery, and therefore the highest quality. We
          convert client requirements into an answer that specializes in
          building secure, scalable, and centric products. We are having a
          creative and focused company staff. Extend your team with our experts,
          and follow the proper development methodologies practices, and work
          culture. Our main support and other options minimize issues and
          maximize your efficiency. We know we can always rely on yeptions
          various competencies. When our clients require quality service which
          would facilitate your requirement. We also provide our customers with
          true beneficial solutions. After learning more about our company, we
          encourage visitors to check out our all products and services. We are
          dedicated and have a passion for excellence.
        </p>
      </p>
    </div>
  );
}
