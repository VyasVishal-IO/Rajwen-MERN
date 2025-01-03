// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

// Pages
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Orders from './Pages/Orders';
import AdminDashboard from './Pages/AdminDashboard';
import RajvenBooking from './Pages/reservation';
import FoodDetailPage from './Pages/FoodDetailPage';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const App = () => (
  <Router>
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <div className="AllPage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/food/:id" element={<FoodDetailPage />} />
              <Route path="/Reservations" element={<RajvenBooking />} />
              <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            </Routes>
          </div>
          <Toaster position="top-right" />
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  </Router>
);

export default App;
