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

import { useEffect, useState } from 'react';
import firebase from './firebase';

const updateDatabase = () => {
  const dbRef = firebase.database().ref('job-data');

  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      dbRef.update(data)
    })
}

function App() {

  // updateDatabase();

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="seeker" element={<SeekerLogin />} />
        <Route path="employer" element={<EmployerLogin />} />
      </Route>
      <Route path="/dashboard" element={<EmployerDashboard />} />
      <Route path="/board" element={<MainBoard />} />
      <Route path="/review" element={<FormReview />} />
      <Route path="/form/*" element={<Form />} />
      <Route path="/form/:formId" element={<Form />} />
      <Route path="/review/:formId" element={<FormReview />} />
      <Route path="/submit/:formId" element={<FormSubmitted />} />
    </Routes>
  );
}

export default App;
