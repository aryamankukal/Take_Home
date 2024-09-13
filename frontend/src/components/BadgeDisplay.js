import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BadgeDisplay() {
  const { id } = useParams();
  const [badge, setBadge] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadge = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/badges/${id}`);
        setBadge(response.data);
      } catch (error) {
        console.error('Error fetching badge', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBadge();
  }, [id]);

  // if (loading) return <div>Loading...</div>; 
  

  if (!badge) return <div>No badge found.</div>;

  return (
    <div className="badge-display">
      <h1>{badge.name}</h1>
      <p>University: {badge.university}</p>
      <p>Major: {badge.major}</p>
      <p>Graduation Date: {badge.graduation_date}</p>
      <p>
        GitHub: <a href={badge.github} target="_blank" rel="noopener noreferrer">{badge.github}</a>
      </p>
      <p>Skills: {badge.skills}</p>
      <img src={`http://127.0.0.1:5000/${badge.qr_code_url}`} alt="QR Code" />
    </div>
  );
}

export default BadgeDisplay;
