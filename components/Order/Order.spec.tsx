import {mount} from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import {withReduxAndStyledProviders} from '../../test/testUtils';
import CardHeader from '../CardHeader/CardHeader';
import Order from './Order';
import * as Styled from './Order.styles';


const order = {
    shippingInfo: {
        firstName: 'Alfred',
        lastName: 'Mirzasalikhov',
        email: 'a18alfred@yandeex.com',
        city: 'Las Vegas',
        address: '3001 Lake East Dr., Apt. 2024',
        country: 'USA',
        state: 'Nevada',
        zipCode: '89117',
        phone: '7025889999',
    },
    paymentInfo: {
        paymentID: 'test123',
        status: 'Processed/Paid',
    },
    deliveryStatus: 'Not delivered',
    _id: 'UfNiPlIMWEV3bceA76jn5xGVgzAx71a3',
    user: 'ENL4xzRhnbWi0GF2EWi2SuAyOj1PRPtM',
    orderTotal: 850,
    purchase: [
        {
            _id: 'ijFA94CZI321XEtJfslTots77dNcbCeh',
            productID: 'bptS61wHdNDoTaxEVeJ762AJMq0pH4bF',
            brand: 'Adidas',
            model: 'Yeezy 500 (Enflame)',
            size: '10.5',
            img: '/images/990v6_1.webp',
            price: 300,
        },
        {
            _id: '6T60MFYGfYBZWz13621rGILkYFxBLPOc',
            productID: 'HZC4Hwq8uYlcwLFqPYnYGmn9woyy3lNy',
            brand: 'Adidas',
            model: 'Yeezy 500',
            size: '11',
            img: '/images/990v6_1.webp',
            price: 550,
        },
    ],
    paidAt: '2022-03-21T12:32:00.294Z',
    createdAt: '2022-03-21T12:32:00.302Z',
    __v: 0,
};
/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
    return mount(
        withReduxAndStyledProviders(<Order orderID={1} order={order}/>)
    );
};

describe('Order details', () => {
    const wrap = setup();
    it('should render without throwing an error', () => {
        expect(wrap);
        expect(wrap.length).toBe(1);
    });

    describe('correct left column', () => {
        const leftColumn = wrap.find(Styled.LeftColumn);
        it('should render correct header', () => {
            const header = leftColumn.find(CardHeader);
            expect(header.text()).toBe('Order History');
        });
        it('should render correct subheader', () => {
            const subheader = leftColumn.find(Styled.Subheader).first();
            expect(subheader.text()).toBe(`Order #${1}`);
        });
    });

    describe('correct right column', () => {
        const rightColumn = wrap.find(Styled.RightColumn);
        it('should render correct header', () => {
            const header = rightColumn.find(CardHeader);
            expect(header.text()).toBe('Street Trend Goods');
        });
        it('should render all orders', () => {
            const orderItem = rightColumn.find(Styled.OrderItem);
            expect(orderItem.length).toBe(order.purchase.length);
        });

        it('should render correct image for order', () => {
            const firstOrder = rightColumn.find(Styled.OrderItem).first();

            const image = firstOrder.find(Image);
            expect(image.prop('src')).toBe(order.purchase[0].img);
            expect(image.prop('alt')).toBe(
                order.purchase[0].brand + ' ' + order.purchase[0].model
            );
        });
    });
});
