import React from "react";
import credentials from '../../assets/resume/resume.pdf';

function Resume() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <div className="section-title about content">
              <h2>Resume</h2>
              <button className="about content resume-btn">
                <a href={credentials} target="blank">
                  <span className="resume-btn">
                    Click here to Download my Resume
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// const Resume = () => (
//   <div>
//     <h1>Resume</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//       ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
//       quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>
// );

export default Resume;
