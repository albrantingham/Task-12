// Import necessary libraries and components
import React from 'react';
import { useFormik } from 'formik'; // Import Formik for form handling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Registration = () => {
    const navigate = useNavigate(); // Initialize the navigate function for routing

    // Set up Formik for form handling, with initial values and validation
    const formik = useFormik({
        initialValues: {
            username: '',       // Username field initial value
            firstName: '',      // First name field initial value
            lastName: '',       // Last name field initial value
            email: '',          // Email field initial value
            password: '',       // Password field initial value
            confirmPassword: '',// Confirm password field initial value
        },
        validate: values => {
            const errors = {};

            // Username validation
            if (!values.username) {
                errors.username = 'Required'; // Username is required
            } else if (values.username.length > 20) {
                errors.username = 'Must not exceed 20 characters'; // Max length 20
            }

            // First Name validation
            if (!values.firstName) {
                errors.firstName = 'Required'; // First name is required
            } else if (values.firstName.length > 15) {
                errors.firstName = 'Must not exceed 15 characters'; // Max length 15
            }

            // Last Name validation
            if (!values.lastName) {
                errors.lastName = 'Required'; // Last name is required
            } else if (values.lastName.length > 20) {
                errors.lastName = 'Must not exceed 20 characters'; // Max length 20
            }

            // Email validation
            if (!values.email) {
                errors.email = 'Required'; // Email is required
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'; // Invalid email format
            }

            // Password validation
            if (!values.password) {
                errors.password = 'Required'; // Password is required
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters'; // Min length 8
            } else if (!/[A-Z]/.test(values.password)) {
                errors.password = 'Password must contain at least one uppercase letter'; // Uppercase check
            } else if (!/[a-z]/.test(values.password)) {
                errors.password = 'Password must contain at least one lowercase letter'; // Lowercase check
            } else if (!/[0-9]/.test(values.password)) {
                errors.password = 'Password must contain at least one number'; // Number check
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
                errors.password = 'Password must contain at least one special character'; // Special character check
            }

            // Confirm Password validation
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required'; // Confirm password is required
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = 'Passwords must match'; // Passwords must match
            }

            return errors; // Return errors if validation fails
        },
        onSubmit: values => {
            // Navigate to the login page after successful registration
            navigate('/login');
        },
    });

    return (
        <div className="container-fluid registration-page">
            <div className="row registration-container">
                
                {/* Left Column: Text Section */}
                <div className="col-md-6 registration-text">
                    <h2 className="registration-title">Create an Account</h2>
                    <p className="registration-description">
                        Register to become a member of Caswell Surf and our community. 
                        You'll not only receive updates on our latest offers and deals, 
                        but also invites to the social events and gatherings we hold throughout the year! 
                    </p>
                </div>

                {/* Right Column: Form Section */}
                <div className="col-md-6 registration-form-container">
                    <form onSubmit={formik.handleSubmit} className="registration-form">
                        {/* Username Input */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for username */}
                            {formik.touched.username && formik.errors.username && (
                                <div className="invalid-feedback">{formik.errors.username}</div>
                            )}
                        </div>

                        {/* First Name Input */}
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for first name */}
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="invalid-feedback">{formik.errors.firstName}</div>
                            )}
                        </div>

                        {/* Last Name Input */}
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for last name */}
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="invalid-feedback">{formik.errors.lastName}</div>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for email */}
                            {formik.touched.email && formik.errors.email && (
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for password */}
                            {formik.touched.password && formik.errors.password && (
                                <div className="invalid-feedback">{formik.errors.password}</div>
                            )}
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                            />
                            {/* Display validation error for confirm password */}
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn registration-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
