import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from './features/user/userAction';
import ProtectedRoute from './components/routes/ProtectedRoute';

function App() {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(userToken) {
      dispatch(getUserDetails);
    }
  }, [userToken, dispatch]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route element={<ProtectedRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
