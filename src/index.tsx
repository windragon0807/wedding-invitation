import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalContext } from './contexts/ModalContext';
import './scss/global.scss';
import FullScreenMessage from '@shared/FullScreenMessage';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ModalContext>
      <QueryClientProvider client={queryClient}>
        <ModalContext>
          <Suspense fallback={<FullScreenMessage type="loading" />}>
            <App />
          </Suspense>
        </ModalContext>
      </QueryClientProvider>
    </ModalContext>
  </React.StrictMode>,
);

reportWebVitals();
