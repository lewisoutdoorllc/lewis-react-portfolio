import React from "react";
import headShot from './img/head-shot.jpg';

const About = () => (
  <div className='p-3'>
    <img src={headShot} className='head-shot' alt='' />
    <h3 className='pl-1 pt-2 pb-4'>Cody Lewis</h3>
    <h1>A Little About Me</h1>
    <p>
      My name is Cody Lewis and I am the proud founder and owner of Lewis Outdoor Solutions LLC based in Oviedo,
      FL since 2010. I have over 20 years of small business management experience and have successfully grown my
      current company into one of Central Florida’s most well-known and well-respected landscaping design and irrigation
      businesses. My highly trained team of landscaping and irrigation professionals lead the industry in private,
      commercial, and city related services. I offer a unique blend of leadership, vision, and knowledge and have served
      throughout North Florida and Central Florida in all aspects of turf, lighting, irrigation, landscape, and consulting services.
       </p>
    <p>I currently on my way to becoming a full stack developer at UCF and will be updating this soon to say I am one.
    Yay. I look forward to continuing my future in web development, application development, and would like to continue
    into Cyber Security in the near future.
      </p>
    <p> I am the proud father of two beautiful children ages 2 and 8. My wife, Brooke, is also actively involved in
    Lewis Outdoor Solutions as the COO and Human Resource Manager. We enjoy spending time together in the kitchen
    (as a family) creating and making new and interesting meals. My family also enjoys four-wheeling, theme park hopping,
    and spending time with our rescued Pit Bull, Annabelle.
    </p>
  </div>
);

export default About;
