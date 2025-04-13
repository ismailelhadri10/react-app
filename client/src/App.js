import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherDashboard from './pages/Teacher/Dashboard';
import StudentExam from './pages/Student/Exam';
import Login from './pages/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/exam/:id" element={<StudentExam />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;