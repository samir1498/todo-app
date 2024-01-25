// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { OrdersList } from '@todo-app/orders';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <OrdersList />
      <NxWelcome title="todo-app" />
    </div>
  );
}

export default App;
