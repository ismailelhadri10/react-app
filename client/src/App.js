import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Teacher/Dashboard';
import Exam from './pages/Student/Exam';
import Login from './pages/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/exam/:id" element={<Exam />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;