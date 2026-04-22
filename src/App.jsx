import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-kicker">Recovery journal</span>
          <span className="brand-title">Rolling Nerdy</span>
        </div>
        <div className="pill">Private-feeling recovery notes</div>
      </header>

      <section className="hero">
        <div className="hero-card">
          <h1>Document the days that changed after the crash.</h1>
          <p>
            A calm place to track pain, appointments, costs, emotional check-ins,
            and everything else that becomes easy to forget when life gets thrown off course.
          </p>

          <div className="hero-actions">
            <div className="pill primary">Write an entry</div>
            <div className="pill">Track symptoms</div>
            <div className="pill">Keep evidence organized</div>
          </div>
        </div>

        <aside className="info-card">
          <div className="info-stack">
            <div className="info-panel">
              <h3>Daily clarity</h3>
              <p>Capture what hurt, what changed, and what got harder.</p>
            </div>
            <div className="info-panel">
              <h3>Case support</h3>
              <p>Keep a clean record of appointments, receipts, and missed work.</p>
            </div>
            <div className="info-panel">
              <h3>One steady place</h3>
              <p>Less scattered notes. More structure when your head is already full.</p>
            </div>
          </div>
        </aside>
      </section>

      <main className="content-wrap">
        <Outlet />
      </main>

      <p className="footer-note">
        Built for recovery, reflection, and keeping the details together.
      </p>
    </div>
  )
}

export default App