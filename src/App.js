import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import {toast,Toaster} from "react-hot-toast"
import { getMyProfile } from './redux/actions/userAction';
import {ProtectedRoute} from "protected-route-react" 
import Loader from './components/Layout/Loader/Loader';
function App() {
  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault();
  // })

  const dispatch = useDispatch();
  const {isAuthenticated,user,message,error,loading} = useSelector(state=>state.user);
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});

    }

    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});

    }

  },[dispatch,error,message]);

  useEffect(()=>{
    dispatch(getMyProfile());

  },[dispatch])
  return (
  <>
  <Router>
  {
    loading ? (<Loader/>) : (
      <>
        <Header isAuthenticated={isAuthenticated} user={user}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courses/:id' element={<CourseDetails/>}/>
      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"> 
        <Login/>
      </ProtectedRoute>}/>
      <Route path='/signup' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
        <SignUp/>
      </ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <Profile user={user}/>
      </ProtectedRoute>}/>
      <Route path='/updatepassword' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <UpdatePassword/>
      </ProtectedRoute>}/>
      <Route path='/changeprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <UpdateProfile/>
      </ProtectedRoute>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/reqcourse' element={<RequestCourse/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      <Route path='/paymentfail' element={<PaymentFail/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>

      {/* *********************Admin Routes ********************** */}
      <Route path='/admin/dashboard' element={<ProtectedRoute adminRoute={true} isAuthenticated={isAuthenticated} isAdmin={user && user.role === 'admin'}>
        <Dashboard/>
      </ProtectedRoute>}/>
      <Route path='/admin/createcourses' element={<ProtectedRoute adminRoute={true} isAuthenticated={isAuthenticated} isAdmin={user && user.role === 'admin'}>
        <CreateCourses/>
      </ProtectedRoute>}/>
      <Route path='/admin/courses' element={<ProtectedRoute adminRoute={true} isAuthenticated={isAuthenticated} isAdmin={user && user.role === 'admin'}>
        <AdminCourses/>
      </ProtectedRoute>}/>
      <Route path='/admin/users' element={<ProtectedRoute adminRoute={true} isAuthenticated={isAuthenticated} isAdmin={user && user.role === 'admin'}>
        <User/>
      </ProtectedRoute>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    {/* <Footer/> */}
    <Toaster/>
      </>
    )
  }
  </Router>
  </>
  );
}

export default App;
