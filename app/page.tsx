'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirect to index.html on mount
    window.location.href = '/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>PowerFlow</h1>
        <p>Redirecting to homepage...</p>
        <p style={{ marginTop: '20px' }}>
          <a href="/index.html" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>
            Click here if not redirected automatically
          </a>
        </p>
      </div>
    </div>
  );
}
