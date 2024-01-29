import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Produits from './pages/Produits';
import FraiPoulet from './pages/Produits/Frais/FraiPoulet';
import Gourmand from './pages/Produits/Gourmands/Gourmand';
import Viande from './pages/Produits/Viandes/Viande';
import Service from './pages/Service';

export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='produit' element={<Produits />}>
        <Route path="viande" element={<Viande />} />
        <Route path="frais" element={<FraiPoulet />} />
        <Route path="gourmands" element={<Gourmand />} />
      </Route>
      <Route path="decouvre" element={<Service />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

  );
}
