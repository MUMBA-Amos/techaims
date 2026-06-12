import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: June 2026</p>
      </section>

      <div className="legal-container">
        <p>
          TechAimz ("we", "us", or "our") respects your privacy. This policy explains what information we
          collect through this website, how we use it, and the choices you have.
        </p>

        <h2>Information we collect</h2>
        <p>
          We only collect the information you choose to give us. When you submit our contact form, we collect
          the name, email address, and message you provide so we can respond to your enquiry. We do not require
          you to create an account or provide any other personal information to use this site.
        </p>

        <h2>How we use your information</h2>
        <p>
          We use the details you submit solely to respond to your enquiry and to communicate with you about the
          services you have asked about. We do not sell, rent, or share your personal information with third
          parties for marketing purposes.
        </p>

        <h2>How your information is stored</h2>
        <p>
          Contact form submissions are stored securely using our hosting and database providers, who process
          this data on our behalf. We retain enquiries only for as long as needed to respond to you and keep a
          reasonable record of our communications.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          This site does not use tracking or advertising cookies. Our hosting provider may collect basic,
          aggregated technical information (such as general traffic data) to keep the site running reliably and
          securely.
        </p>

        <h2>Your rights</h2>
        <p>
          You may ask us to access, correct, or delete the personal information you have submitted to us at any
          time. To make a request, simply contact us using the details below.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy, please email us at{' '}
          <a href="mailto:contact@techaimz.com">contact@techaimz.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
