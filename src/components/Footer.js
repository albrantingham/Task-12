// src/components/Footer.js
import React from 'react'; // Importing React to use JSX
import { Container, Row, Col } from 'react-bootstrap'; // Importing grid components from react-bootstrap for layout

const Footer = () => {
  return (
    // Footer container for styling and layout
    <footer className="footer-container">
      {/* Container component to center and contain the content */}
      <Container>
        {/* Row to create a horizontal section for content */}
        <Row>
          {/* Column component to define the structure of the content within the row */}
          <Col className="text-center">
            {/* Footer content */}
            <div className="footer-text">
              {/* Contact details */}
              <p>Email: info@caswellsurf.co.uk</p>
              <p>Phone: 07539 237549</p>
            </div> 
            {/* Copyright notice */}
            <p>&copy; 2024 CaswellSurf. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
