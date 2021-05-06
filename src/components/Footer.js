import React from 'react';

function Footer () { 
    return (
      <footer>

     <div className="row">
        <div className="columns">
           <ul className="social-links">
            <li><a href="linkedin.com/in/cody-lewis-1165b91bb" target="blank"> <i className="fab fa-linkedin"></i> </a></li>
            <li><a href="https://github.com/lewisoutdoorllc" target="blank"> <i className="fab fa-github"></i> </a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; 2021 Cody Lewis</li>
           </ul>

        </div>
   </div>
  </footer>
    );
  }


export default Footer;