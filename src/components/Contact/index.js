import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

// const Contact = () => (
//   <div>
//     <h1>Contact Page</h1>
//     <p>
//       Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
//       Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
//       pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
//       tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//       posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus
//       vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam
//       tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//       conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel
//       condimentum magna, quis tempor nulla.
//     </p>
//   </div>

// );
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <main>
      <section className='mb-4 p-5'>

        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me!</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>


        <div className='row'>
          <div className="col-md-6 mb-md-0 mb-5 p-4">

            <form id="contact-form" name='contact-form' onSubmit={handleSubmit}>

              <div className='row'>
                <div className='col-md-6'>
                  <div className='md-form mb-4'>
                    <input className='form-control' placeholder="Name" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    {/* <label htmlFor="name">Name</label> */}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='md-form mb-4'>
                    <input className='form-control' placeholder="Email Address" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    {/* <label htmlFor="email">Email address</label> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-4">
                    <input placeholder="Subject" type="text" id="subject" name="subject" className="form-control" />
                    {/* <label htmlFor="subject" className="">Subject</label> */}
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-med-12'>
                  <div className='md-form'>
                    <textarea placeholder="Message" className="form-control md-textarea" type='text' id='message' name="message" rows="2" defaultValue={message} onBlur={handleChange} />
                    {/* <label htmlFor="message">Message</label> */}
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* <button data-testid="button" type="submit">Submit</button> */}
            </form>
            <div className="text-center text-md-left mt-2">
              <button className="btn btn-primary">Send</button>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Oviedo, Fl 32765, USA</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>(407)792-9470</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>lewisoutdoorllc@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
