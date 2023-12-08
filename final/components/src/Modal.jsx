import React, { useState } from 'react';
import Button from './Button';
import './index.css';
function Modal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Warning! Name is required!';
    if (!email.trim()) newErrors.email = 'Warning! Email is required!';
    if (email !== confirmEmail) newErrors.confirmEmail = 'Warning! Emails must match!';

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted!'); 
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
        <h1>Contact Us</h1>
        
        <p>Whether you have questions about our Maltese puppies, need assistance with training, or want to share your experiences, we're here to help. Reach out to us for any inquiries, support, or feedback, and we'll ensure you receive the assistance you need.</p>
        <body>
        <dialog open>
          <form onSubmit={handleSubmit} className="form">
            {/* Name input field */}
            <div className="form__label form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* Email input field */}
            <div className="form__label form-group">
              <label htmlFor="email">Email *</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* Confirm Email input field */}
            <div className="form__label form-group">
              <label htmlFor="confirmEmail">Confirm Email *</label>
              <input type="text" id="confirmEmail" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
              {errors.confirmEmail && <span className="error">{errors.confirmEmail}</span>}
            </div>

            {/* Submit button */}
            <Button type="submit" visual="link">Submit</Button>
          </form>
        </dialog>
        </body>
    </div>
  );
}
export default Modal;

