import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import * as Styled from './CartIcon.styles';

export interface Props {
    productAmount: number;
}

const CartIcon = ({productAmount}: Props): JSX.Element => {
    return (
        <Styled.Container>
            <FiShoppingCart className='shopping-cart-icon'/>
            <Styled.ProductQuantity>
                <p className='product-amount'>
                    {productAmount}
                </p>
            </Styled.ProductQuantity>
        </Styled.Container>
    );
};

export default CartIcon;
