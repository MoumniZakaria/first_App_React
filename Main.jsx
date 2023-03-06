import  { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <span className='nav-logo-name'>Homepage</span>
            </Link>  
            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <span className='nav-link-name'>Hotel</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <span className='nav-link-name'>Gallery</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <span className='nav-link-name'>Transaction</span>
              </Link>
            </div>
          </div>
          <Link to='/logout' className='nav-link'>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Main;