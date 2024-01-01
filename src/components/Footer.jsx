import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Company Info */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="font-weight-bold mb-3">Company Info</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              {/* Add more company info links */}
            </ul>
          </div>

          {/* Column 2: Help Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="font-weight-bold mb-3">Help Links</h4>
            <ul className="list-unstyled">
              <li>FAQs</li>
              <li>Support</li>
              <li>Shipping</li>
              {/* Add more help links */}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="font-weight-bold mb-3">Useful Links</h4>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Resources</li>
              <li>Testimonials</li>
              {/* Add more useful links */}
            </ul>
          </div>

          {/* Column 4: Get in the Know */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="font-weight-bold mb-3">Get in the Know</h4>
            <p>Subscribe to our newsletter for updates.</p>
            {/* Add newsletter subscription form */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted mt-4">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
