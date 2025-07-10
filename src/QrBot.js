import React, { useEffect } from 'react';

const QrBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/kore-web-sdk@11.14.1/dist/umd/kore-web-sdk-umd-chat.min.js';
    script.async = true;
    script.onload = () => {
      if (window.KoreChatSDK) {
        const config = window.KoreChatSDK.chatConfig;
        config.botOptions.API_KEY_CONFIG.KEY = 'f063b918e7604474be4abe90c734664f1c7e604716ef4dbab9cdd04ae919d3eastaf';
        config.defaultOpen = true;
        new window.KoreChatSDK.chatWindow().show(config);
      }
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '1.5rem' }}>Ready to schedule your test drive?</h1>
      <img
        src="/Zeekr_logo.png"
        alt="Screenshot of the chat"
        style={{ maxWidth: '300px', marginTop: '1rem' }}
      />
    </div>
  );
};

export default QrBot;
