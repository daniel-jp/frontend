import {BrowserRouter as Router} from 'react-router-dom';

import Footer from './Components/footerComp/Footer';
import NavBar from './Components/navBar/NavBar';
import Routes from './Routes';

// src/App.tsx
function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
