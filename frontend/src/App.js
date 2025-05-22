import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';

function App() {
  const role = localStorage.getItem('role');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={role === 'user' ? <UserDashboard /> : <Navigate to="/" />} />
        <Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/owner" element={role === 'owner' ? <StoreOwnerDashboard /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
