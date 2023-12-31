import Image from 'next/image';
import React from 'react';
import {
    addToCartType,
    removeFromCartType,
} from '../../state/action-creators/cartActionCreators';
import {CartItem} from '../../types/cartReduxTypes';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './CartProductItem.styles';

export interface Props {
    cartItem: CartItem;
    removeFromCart: removeFromCartType;
    addToCart: addToCartType;
}

/**
 *@component responsible for rendering of the content of cart items
 *@function CartProductItem
 *@param {object} cartItem - cart item details
 *@param {function} removeFromCart - redux action creator to dispatch remove from cart action
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CartProductItem = ({
                             cartItem,
                             removeFromCart,
                             addToCart,
                         }: Props): JSX.Element => {
    const {brand, model, price, productID, productImg, size} = cartItem;
    const handleRemoveFromCart = () => {
        removeFromCart(productID, size);
    };

    const handleAddMore = () => {
        addToCart({...cartItem});
    };

    return (
        <Styled.Container>
            <Styled.LeftColumn>
                <Styled.Figure>
                    <Image
                        src={productImg}
                        alt={`${brand} ${model}`}
                        width={60}
                        height={60}
                        objectFit='contain'
                    />
                </Styled.Figure>

                <Styled.Wrap>
                    <RouterLink
                        href={`/products/${productID}`}
                    >{`${brand} ${model}`}</RouterLink>
                    <Styled.Price>${price}</Styled.Price>
                </Styled.Wrap>
            </Styled.LeftColumn>

            <Styled.RightColumn>
                <Styled.SizeWrap>
                    <span>Size</span>
                    <Styled.Price>{size}</Styled.Price>

                </Styled.SizeWrap>

                <Styled.ControlButton btnType='add' onClick={handleAddMore}>
                    Add more
                </Styled.ControlButton>
                <Styled.ControlButton btnType='remove' onClick={handleRemoveFromCart}>
                    Remove
                </Styled.ControlButton>
            </Styled.RightColumn>
        </Styled.Container>
    );
};
export default CartProductItem;
