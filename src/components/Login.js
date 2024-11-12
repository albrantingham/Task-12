import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login2 copy.jpg';

// The Login component handles user authentication with a form
const Login = ({ setUsername }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically after form submission

  // Formik hook for form handling, validation, and submission
  const formik = useFormik({
    initialValues: {
      username: '', // Initial value for username input field
      password: '', // Initial value for password input field
    },
    // Validation function to check form inputs
    validate: values => {
      const errors = {};

      // Username validation
      if (!values.username) {
        errors.username = 'Required'; // Error if username is not provided
      } else if (values.username.length > 20) {
        errors.username = 'Must not exceed 20 characters'; // Error if username exceeds 20 characters
      }

      // Password validation
      if (!values.password) {
        errors.password = 'Required'; // Error if password is not provided
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'; // Error if password is too short
      } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Password must contain at least one uppercase letter'; // Error if password doesn't contain uppercase letter
      } else if (!/[a-z]/.test(values.password)) {
        errors.password = 'Password must contain at least one lowercase letter'; // Error if password doesn't contain lowercase letter
      } else if (!/[0-9]/.test(values.password)) {
        errors.password = 'Password must contain at least one number'; // Error if password doesn't contain a number
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
        errors.password = 'Password must contain at least one special character'; // Error if password doesn't contain a special character
      }

      return errors; // Return the errors object to display validation errors
    },
    // Handle form submission
    onSubmit: values => {
      setUsername(values.username); // Set the username in the parent component
      navigate('/'); // Navigate to the home page after successful login
    },
  });

  return (
    <div className="container-fluid login-page">
      {/* Login Page Layout: A responsive layout with two sections */}
      <div className="row login-container">
        
        {/* Left Section - Displays an image (responsive on larger screens) */}
        <div className="col-12 col-xl-6 login-image-container">
          <img src={loginImage} alt="Surfing" className="img-fluid login-image" />
        </div>

        {/* Right Section - Contains the login form */}
        <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center login-form-container">
          <form onSubmit={formik.handleSubmit} className="login-form">
            <h2 className="mb-4">Log In</h2>

            {/* Username Input Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange} // Update form state when username changes
                onBlur={formik.handleBlur} // Trigger validation when the user leaves the field
                value={formik.values.username} // Bind the value of the input field to Formik state
                className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`} // Conditionally apply invalid class
              />
              {formik.touched.username && formik.errors.username && (
                <div className="invalid-feedback">{formik.errors.username}</div> // Display validation error for username
              )}
            </div>

            {/* Password Input Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange} // Update form state when password changes
                onBlur={formik.handleBlur} // Trigger validation when the user leaves the field
                value={formik.values.password} // Bind the value of the input field to Formik state
                className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} // Conditionally apply invalid class
              />
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div> // Display validation error for password
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary login-submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
