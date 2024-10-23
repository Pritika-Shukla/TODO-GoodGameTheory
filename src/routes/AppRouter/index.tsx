import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/SignupPage';
import LoginPage from '../../pages/LoginPage';

import { createBrowserRouter } from 'react-router-dom';


export const approute = createBrowserRouter([
  {
    path: '/',
  element: <SignupPage/>,
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);
