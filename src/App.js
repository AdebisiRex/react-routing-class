import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate,  } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404';
import BiodataPage from './pages/BiodataPage';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import DashboardRoutes from './routes/DashboardRoutes';
import AuthRoutes from './routes/AuthRoutes';
import DashboardLayout from './layout/DashboardLayout';
import HasChildren from './components/HasChildren';

function App() {
  return (
    <>
      {/* <ul>
        <li>Wildcard Route: handle for all unhandled routes (*)</li>
        <li>Parameterized Route: handle for all unhandled routes (*)</li>
      </ul> */}

      {/* <HasChildren>
        <SignIn/>
      </HasChildren> */}
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/auth/*' element= {<AuthRoutes/>}/>
        <Route path='/dashboard/*' element={<HasChildren><DashboardLayout/></HasChildren>}/>
        <Route path='/:userData' element={<BiodataPage />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
