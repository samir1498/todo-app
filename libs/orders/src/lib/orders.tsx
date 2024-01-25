import { SharedUi } from '@todo-app/shared-ui';
import styles from './orders.module.css';

/* eslint-disable-next-line */
export interface OrdersProps {}

export function Orders(props: OrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!</h1>
      <SharedUi />
    </div>
  );
}

export default Orders;
