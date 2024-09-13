import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/badges/${id}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <h1>{profile.name}</h1>
      <p>University: {profile.university}</p>
      <p>Major: {profile.major}</p>
      <p>Graduation Date: {profile.graduation_date}</p>
      <p>GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a></p>
      <p>Major: {profile.skills}</p>
    </div>
  );
}

export default ProfilePage;
