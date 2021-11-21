import './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SeekerLogin from './components/SeekerLogin';
import EmployerLogin from './components/EmployerLogin';
import EmployerDashboard from './pages/EmployerDashboard';
import MainBoard from './pages/MainBoard';
import Form from './pages/Form';

const uploadData = () => {
  let dataObject = {};

  fetch('./data/data.json')
    .then(res => res.json())
    .them(data => {
      dataObject = { ...data }
    })
}

function App() {



  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="seeker" element={<SeekerLogin />} />
        <Route path="employer" element={<EmployerLogin />} />
      </Route>
      <Route path="/dashboard" element={<EmployerDashboard />} />
      <Route path="/board" element={<MainBoard />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
