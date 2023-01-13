import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Board from './board';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
    errorElement: <Board />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
