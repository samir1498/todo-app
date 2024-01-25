// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProductList } from '@todo-app/products';
// import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { OrdersList } from '@todo-app/orders';

function Home() {
  return <h1>Home</h1>;
}


export function App() {
  return (
    <div>
   
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrdersList />}></Route>

      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
