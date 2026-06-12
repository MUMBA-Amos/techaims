import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: June 2026</p>
      </section>

      <div className="legal-container">
        <p>
          These terms govern your use of the TechAimz website. By accessing or using this site, you agree to
          these terms. If you do not agree, please do not use the site.
        </p>

        <h2>Use of this website</h2>
        <p>
          This website is provided for general information about TechAimz and the services we offer. You may
          view and use the site for lawful, personal, and business purposes. You agree not to misuse the site,
          attempt to disrupt it, or use it in any way that breaches applicable laws.
        </p>

        <h2>Information and content</h2>
        <p>
          We aim to keep the information on this site accurate and up to date, but we make no guarantees that it
          is complete, current, or error-free. The content describes our capabilities and past work and does not
          constitute a binding offer or professional advice. Any engagement for services will be governed by a
          separate written agreement.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The TechAimz name, logo, text, graphics, and other content on this site are owned by or licensed to
          us and are protected by applicable intellectual property laws. You may not reproduce or reuse our
          content without our permission.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site may contain links to third-party websites or services. We are not responsible for the
          content, policies, or practices of any third-party sites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, TechAimz is not liable for any loss or damage arising from
          your use of, or inability to use, this website. The site is provided on an "as is" and "as available"
          basis.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after any changes means you
          accept the revised terms.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions about these terms, please email us at{' '}
          <a href="mailto:contact@techaimz.com">contact@techaimz.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
