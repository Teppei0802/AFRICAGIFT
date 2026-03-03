/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Service from './pages/Service';
import Order from './pages/Order';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Tokushoho from './pages/Tokushoho';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Partner from './pages/Partner';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="order" element={<Order />} />
            <Route path="order/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="success" element={<Success />} />
            <Route path="tokushoho" element={<Tokushoho />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="contact" element={<Contact />} />
            <Route path="partner" element={<Partner />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}
