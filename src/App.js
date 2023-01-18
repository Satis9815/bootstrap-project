import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import ResetPassword from './components/Auth/ResetPassword';
import SignUp from './components/Auth/SignUp';
import Contact from './components/Contact/Contact';
import RequestCourse from './components/Contact/RequestCourse';
import CourseDetails from './components/courses/CourseDetails';
import Courses from './components/courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import NotFound from './components/Layout/NofFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
function App() {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
  <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courses/:id' element={<CourseDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reqcourse' element={<RequestCourse/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
