import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '10px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '2px solid #333',
        backgroundColor: 'transparent',
        color: '#333',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.backgroundColor = '#333');
        (e.currentTarget.style.color = '#fff');
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.backgroundColor = 'transparent');
        (e.currentTarget.style.color = '#333');
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  ) : null;
};

export default BackToTopButton;
