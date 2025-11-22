import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PaymentPage from './pages/PaymentPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PaymentHistory from './pages/PaymentHistory';
import Bills from './pages/Bills';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/" element={<Bills />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;