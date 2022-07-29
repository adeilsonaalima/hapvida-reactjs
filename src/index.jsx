import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Hapvida from './pages/hapvida'

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <StrictMode>
    <Hapvida />
  </StrictMode>
);