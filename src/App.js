import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [username, setUsername] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar username={username} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setUsername={setUsername} />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;


