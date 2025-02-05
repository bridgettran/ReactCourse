import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './routes/Posts'
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{ path: '/create-post', element: <NewPost /> }],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
