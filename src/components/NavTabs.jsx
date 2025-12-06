import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav nav-tabs ">
      <div className="nav-item">
        <Link
          to="/WriteJournal"
          className={currentPage === '/WriteJournal' ? 'nav-link active' : 'nav-link'}
        >
          ·Write In Journal
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          ·Contact
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/CrashAssistant"
          className={currentPage === '/CrashAssistant' ? 'nav-link active' : 'nav-link'}
        >
          ·Crash Assistant 
        </Link>
      </div>





    </div>
  );
}

export default NavTabs;
