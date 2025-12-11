// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@/components/ui/button';

// 1. Define a simple root component to test
const App = () => {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Project Expo App Running!</h1>
      <p>This confirms the React environment is working.</p>
      {/* 2. Test one of your installed components */}
      <Button variant="default" size="lg">
        Test Button (From components/ui/button.tsx)
      </Button>
    </div>
  );
};

// 3. Mount the application to the root element in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);