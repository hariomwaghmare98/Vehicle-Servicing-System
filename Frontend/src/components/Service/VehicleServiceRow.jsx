// VehicleServiceRow.jsx
import React from 'react';
import oilChangeImage from '../../Images/oilchange.jpg';
import tireRotationImage from '../../Images/tire-rotation.jpg';


const VehicleServiceRow = () => {
  const services = [
    { title: 'Oil Change', description: 'Regular oil change for optimal engine performance.', image: oilChangeImage },
    { title: 'Tire Rotation', description: 'Ensure even wear on your tires for a smoother ride.', image: tireRotationImage },
    { title: 'Tire Rotation', description: 'Ensure your tire are safe ', image: oilChangeImage},
  ];

  const handleImageError = (index) => {
    // Handle image load errors here
    console.error(`Error loading image for service at index ${index}`);
  };

  return (
    <div style={cardRowStyle}>
      {services.map((service, index) => (
        <div key={index} style={cardStyle}>
          <img
            src={service.image}
            alt={service.title}
            style={imageStyle}
            onError={() => handleImageError(index)}
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

const cardRowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const cardStyle = {
  width: '250px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  marginBottom: '10px',
  borderRadius: '8px',
};

export default VehicleServiceRow;
