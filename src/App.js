// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import BookingPage from './pages/BookingPage'; 
import PredictionPage from './pages/PredictionPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify default styles
import BoatForm from './components/BoatForm';
import SeatForm from './components/SeatForm';
import BookingList from './components/BookingList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="app-container bg-light">
      <Router>
        <NavbarComponent />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/admin/boats" element={<BoatForm />} />
            <Route path="/admin/seats" element={<SeatForm />} />
            <Route path="/admin/bookings" element={<BookingList />} />
            <Route path="/admin/users" element={<UserList />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </Router>
    </div>
  );
}

export default App;
