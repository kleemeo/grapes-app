import './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeekerLogin from './components/SeekerLogin';
import EmployerLogin from './components/EmployerLogin';
import EmployerDashboard from './pages/EmployerDashboard';
import MainBoard from './pages/MainBoard';
import Form from './pages/Form';
import FormReview from './pages/FormReview';
import FormSubmitted from './pages/FormSubmitted';
import { RequireAuth, AuthProvider, } from './hooks/use-auth';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/seeker" element={<SeekerLogin />} />
        <Route path="/board" element={<MainBoard />} />
        <Route path="/employer" element={<EmployerLogin />} />
        <Route path="/dashboard" element={<RequireAuth><EmployerDashboard /></RequireAuth>} />
        <Route path="/form/*" element={<RequireAuth><Form /></RequireAuth>} />
        <Route path="/form/:formId" element={<RequireAuth><Form /></RequireAuth>} />
        <Route path="/review" element={<RequireAuth><FormReview /></RequireAuth>} />
        <Route path="/review/:formId" element={<RequireAuth><FormReview /></RequireAuth>} />
        <Route path="/submit/:formId" element={<RequireAuth><FormSubmitted /></RequireAuth>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
