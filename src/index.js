import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameScreen from './screens/GameScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import JoinScreen from './screens/JoinScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="join" element={<JoinScreen />} />
      <Route path="game/:game_code" element={<GameScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  </BrowserRouter>
);
