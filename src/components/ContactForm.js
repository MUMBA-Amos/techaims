import React, { useState } from 'react';
import './ContactForm.css';
import { supabase } from '../lib/supabaseClient';

// Public Web3Forms access key (safe to expose in client code).
const WEB3FORMS_KEY = '5343e8b7-cf91-43af-bf21-1fcc148f9269';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Save a copy to Supabase (backup), if configured.
    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      if (error) console.error('Supabase insert failed:', error);
    }

    // 2. Email the enquiry to our inbox via Web3Forms.
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${formData.name}`,
          from_name: 'TechAimz Website',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Web3Forms request failed:', err);
      setStatus('error');
    }
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
