import {shallow} from 'enzyme';
import React from 'react';
import OrderCongratulations from './OrderCongratulations';
import * as Styled from './OrderCongratulations.styles';
import Button from '../Button/Button';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
    const closeModalMock = jest.fn();
    return shallow(
        <OrderCongratulations
            cart={[
                {
                    productID: '610fcfddc610ac3d963f7aee',
                    brand: 'New Balance',
                    model: '990v6',
                    price: 199.99,
                    productImg: '/images/990v6_1.webp',
                    size: '6.5',
                },
            ]}
            orderID={'12345'}
            closeModal={closeModalMock}
        />
    );
};

describe('Order Congratulations component', () => {
    const wrap = setup();

    it('should render without throwing an error', () => {
        expect(wrap);
        expect(wrap.length).toBe(1);
    });

    it('should render correct orderID', () => {
        const idWrapper = wrap.find(Styled.OrderStatus);
        expect(idWrapper.length).toBe(1);
        const orderId = idWrapper.find('p');
        expect(orderId.text()).toBe(`Order #12345 is successfully processed`);
    });

    it('should render all items in cart', () => {
        const cartItem = wrap.find(Styled.OrderItem);
        expect(cartItem.length).toBe(1);
    });

    it('should render control buttons', () => {
        const btnWrap = wrap.find(Styled.ButtonWrapper);
        expect(btnWrap.length).toBe(1);
        const controlBtn = wrap.find(Button);
        expect(controlBtn.length).toBe(2);
    });
});
