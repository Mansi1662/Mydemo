
import './App.css';
import Cart from './Component/Cart';
import Dashboard from './Component/Dashboard';
import Products from './Component/Products';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './Component/RootLayout';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout />}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router} / >
    </div>
  );
}

export default App;
