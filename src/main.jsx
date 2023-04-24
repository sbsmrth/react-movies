import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './routes/Home';
import { MovieDetails } from './routes/MovieDetails';
import { MainSection } from './routes/MainSection';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <MainSection />
      },
      {
        path: 'movies/:movid',
        element: <MovieDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
