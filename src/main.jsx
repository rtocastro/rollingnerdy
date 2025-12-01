import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import DevelopedBy from './pages/DevelopedBy.jsx';
import WriteJournal from './pages/WriteJournal.jsx'
import Entry from './pages/entry.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Entry />,
      },
      {
        path: '/MainPage',
        element: <MainPage />,
      },
      {
        path: '/DevelopedBy',
        element: <DevelopedBy />,
      },
      {
        path: '/WriteJournal',
        element: <WriteJournal />,
      },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
