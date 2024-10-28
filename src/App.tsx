import { RouterProvider } from 'react-router-dom';
import { approute } from './routes/AppRouter';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={approute} />
    </AuthProvider>
  );
}

export default App;
