import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserCart from '../../views/UserCart/UserCart';

export default function UserCartPage(): JSX.Element {
  const { cart, total, productAmount } = useTypedSelector(
    (state) => state.cart
  );
  const { addToCart, removeFromCart } = useActions();

  return (
    <Layout title={`Shopping Cart`}>
      <UserCart
        cart={cart}
        total={total}
        productAmount={productAmount}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </Layout>
  );
}
