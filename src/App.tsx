import { RouterProvider } from 'react-router-dom';
import { approute } from './routes/AppRouter';

function App() {
  return <RouterProvider router={approute} />;
}

export default App;
