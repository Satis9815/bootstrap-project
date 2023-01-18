import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminCourses from './components/Admin/CreateCourses/AdminCourses';
import CreateCourses from './components/Admin/CreateCourses/CreateCourses';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import User from './components/Admin/User/User';
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
import Profile from './components/Profile/Profile';
import UpdatePassword from './components/Profile/UpdatePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
function App() {
  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault();
  // })
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
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/updatepassword' element={<UpdatePassword/>}/>
      <Route path='/changeprofile' element={<UpdateProfile/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reqcourse' element={<RequestCourse/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>

      {/* *********************Admin Routes ********************** */}
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/createcourses' element={<CreateCourses/>}/>
      <Route path='/admin/courses' element={<AdminCourses/>}/>
      <Route path='/admin/users' element={<User/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    {/* <Footer/> */}
  </Router>
  </>
  );
}

export default App;
