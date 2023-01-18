import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import ResetPassword from './components/Auth/ResetPassword';
import SignUp from './components/Auth/SignUp';
import Contact from './components/Contact/Contact';
import RequestCourse from './components/Contact/RequestCourse';
import Courses from './components/courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
function App() {
  return (
  <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reqcourse' element={<RequestCourse/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
