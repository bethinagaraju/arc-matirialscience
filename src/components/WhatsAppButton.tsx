import React from 'react';
// You can use an icon library like react-icons or an SVG image
// If you don't have react-icons, run: npm install react-icons
import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp Business number
  const phoneNumber = "+14436530066"; 
  const message = "Hello!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp Green
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <FaWhatsapp size={35} />
    </div>
  );
};

export default WhatsAppButton;