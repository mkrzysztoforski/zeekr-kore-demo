import React, { useEffect } from 'react';

const DefaultBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/kore-web-sdk@11.14.1/dist/umd/kore-web-sdk-umd-chat.min.js';
    script.async = true;
    script.onload = () => {
      if (window.KoreChatSDK) {
        window.KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = '0303d97721d647db8a1cba9b4be595f743fb867b6a704c32ac8b24248a04f44cst99';
        // d899143953bf4a23a082b0de3502f7273a934aedc2804987a16d2ce0fdc6e5b0stfd
        new window.KoreChatSDK.chatWindow().show(window.KoreChatSDK.chatConfig);
      }
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/bg.pn')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default DefaultBot;
