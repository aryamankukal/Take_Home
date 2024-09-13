import React, { useState } from 'react';
import axios from 'axios';

function BadgeForm() {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    major: '',
    graduation_date: '',
    github: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/badges', formData);
      window.location.href = `/badge/${response.data.id}`;
    } catch (error) {
      console.error('the data is COOKED', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="badge-form">
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="university" placeholder="University" onChange={handleChange} required />
      <input type="text" name="major" placeholder="Major" onChange={handleChange} required />
      <input type="date" name="graduation_date" placeholder="Graduation Date" onChange={handleChange} required />
      <input type="text" name="github" placeholder="GitHub" onChange={handleChange} required />
      <input type="text" name="skills" placeholder="Skills" onChange={handleChange} required />
      <button type="submit">Create Badge</button>
    </form>
  );
}

export default BadgeForm;


