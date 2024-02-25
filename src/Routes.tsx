import {Route, Routes} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Produits from './pages/Produits';
import Charcuterie from './pages/Produits/AllProdut/Charcuterie';
import FraiPoulet from './pages/Produits/AllProdut/FraiPoulet';
import Gourmand from './pages/Produits/AllProdut/Gourmand';
import Saucisse from './pages/Produits/AllProdut/Saucisse';
import Toppings from './pages/Produits/AllProdut/Toppings';
import Viande from './pages/Produits/AllProdut/Viande';
import Service from './pages/Service';

export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='produit' element={<Produits />}>
        <Route path="bovines" element={<Viande />} />
        <Route path="volailles" element={<FraiPoulet />} />
        <Route path="gourmands" element={<Gourmand />} />
        <Route path="toppings" element={<Toppings />} />
        <Route path="charcuteries" element={<Charcuterie />} />
        <Route path="saucisses" element={<Saucisse />} />
      </Route>
      <Route path="decouvre" element={<Service />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

  );
}
