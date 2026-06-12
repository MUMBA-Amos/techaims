import React, { useState } from 'react';
import './ContactForm.css';
import { supabase } from '../lib/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openMailFallback = () => {
    const subject = `Website enquiry from ${formData.name}`;
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`;
    window.location.href =
      `mailto:contact@techaimz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If Supabase isn't configured, fall back to opening the email client.
    if (!supabase) {
      openMailFallback();
      setStatus('success');
      return;
    }

    setStatus('sending');
    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    if (error) {
      console.error('Supabase insert failed:', error);
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Contact us today</h2>

        <div className="contact-form-tagline">
          <p>Are you ready to elevate your brand's online presence and engage with your audience like never before?</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'SENDING…' : 'SEND >'}
          </button>

          {status === 'success' && (
            <p className="form-status">
              Thanks for reaching out! We’ve received your message and will get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="form-status form-status-error">
              Something went wrong sending your message. Please email us directly at contact@techaimz.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
