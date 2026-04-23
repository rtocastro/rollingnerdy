import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Entry from './pages/Entry.jsx';
import MainPage from './pages/MainPage.jsx';
import DevelopedBy from './pages/DevelopedBy.jsx';
import WriteJournal from './pages/WriteJournal.jsx';
import Contact from './pages/Contact.jsx';
import CrashAssistant from './pages/CrashAssistant.jsx';
import JournalTemp from './components/JournalTemp.jsx';
// import Error from './pages/Error.jsx'; // only if you actually have this file

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />, // uncomment only if Error is imported
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
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/CrashAssistant',
        element: <CrashAssistant />,
      },
      {
        path: '/journal',
        element: <JournalTemp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);