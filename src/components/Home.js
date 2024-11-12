import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../App.css';

const Home = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal when "here" link is clicked
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Formik validation function for the contact form
  const validateForm = (values) => {
    const errors = {};

    // Validate name input
    if (!values.name) {
      errors.name = 'Name is required';
    }

    // Validate email input
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate message input
    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors; // Return validation errors object
  };

  return (
    <div>
      {/* Main page background image */}
      <main className="home-image"></main>

      {/* Bio section containing the description of Caswell Surf */}
      <div className="home-bio">
        <h1>Welcome to Caswell Surf</h1>
        <p className="bio-text">
          Located in the stunning Gower, Wales, Caswell Surf is your one-stop shop for all your surfing needs. We offer a wide range of surfboards, wetsuits, and accessories to ensure you're fully equipped for your next adventure. Whether you're a beginner or a seasoned pro, our friendly team is here to help you find the perfect gear. Explore our collection today and ride the waves with confidence!
        </p>
        
        {/* Horizontal line as a section divider */}
        <hr className="home-divider"/>

        {/* Description of surfing lessons and pricing */}
        <p className="bio-text"> 
          In addition to the products in our online shop, Caswell Surf also offers surfing lessons at our local beach, Caswell Bay. These are geared mainly towards beginners, but we also offer coaching for more advanced surfers. See below for prices and guides:  
        </p>
        
        {/* List of surf lesson options and prices */}
        <ul className="home-list"> 
          <li><span style={{ fontWeight: "bold" }}>Beginner Lessons</span>: Perfect for newcomers, we’ll teach you the fundamentals—paddling, standing, balance, and basic surf safety. (£40 / 2 hour session)</li>
          <li><span style={{ fontWeight: "bold" }}>Intermediate Coaching</span>: For those who know the basics but want to progress, our coaches will help you master wave selection, turns, and advanced techniques. (£60 / 2 hour session)</li>
          <li><span style={{ fontWeight: "bold" }}>Private Sessions</span>: Personalized one-on-one coaching tailored to your goals and skill level, for faster progress and focused feedback. (£60 / 2 hour session)</li>
          <li><span style={{ fontWeight: "bold" }}>Group Sessions and Camps</span>: Join others in a fun, supportive environment with group lessons or sign up for our surf camps for a more immersive experience. (£30 per person / 2 hour session)</li>
        </ul>

        {/* Contact prompt to open modal */}
        <p className="contact-text"> 
          If you would like to make a booking, please get in touch with us <span className="contact-link" onClick={handleModalOpen} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>here</span>.
        </p>
      </div>

      {/* Modal for contact form */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          {/* Modal content container */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Formik Form for Contact */}
            <Formik
              initialValues={{ name: '', email: '', message: '' }}  // Initial form values
              validate={validateForm}  // Validation function
              onSubmit={(values, { resetForm }) => {
                console.log('Form data', values);  // Log form data (could be sent to a backend)
                resetForm();  // Reset the form after submission
                handleModalClose();  // Close the modal after form submission
              }}
            >
              {() => (
                <Form>
                  {/* Name Input Field */}
                  <label>
                    Name:
                    <Field type="text" name="name" placeholder="Your Name" />
                    {/* Display error if validation fails */}
                    <ErrorMessage name="name" component="div" className="error" />
                  </label>

                  {/* Email Input Field */}
                  <label>
                    Email:
                    <Field type="email" name="email" placeholder="Your Email" />
                    {/* Display error if validation fails */}
                    <ErrorMessage name="email" component="div" className="error" />
                  </label>

                  {/* Message Input Field */}
                  <label>
                    Message:
                    <Field as="textarea" name="message" placeholder="Your Message" />
                    {/* Display error if validation fails */}
                    <ErrorMessage name="message" component="div" className="error" />
                  </label>

                  {/* Submit button */}
                  <button type="submit">Send Message</button>
                  {/* Cancel button to close modal */}
                  <button type="button" onClick={handleModalClose}>Cancel</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
