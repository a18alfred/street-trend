import {shallow} from 'enzyme';
import React from 'react';
import {Product} from '../../types';
import ProductItem from './ProductItem';

export const testProductItem: Product = {
    department: 'men',
    colors: ['black'],
    _id: '60e5cabd50a3391774c4e9fa',
    brand: 'Adidas',
    model: 'Yeezy 500',
    price: 450,
    styleCode: 'f36640',
    size: ['10.5'],
    isFeatured: false,
    description:
        'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole.',
    images: [
        {
            _id: '60e5cabd50a3391774c4e9fb',
            public_id: 'test',
            url: 'test',
        },
    ],
};

describe('Footer Social-links Section', () => {
    const closeModalMock = jest.fn();
    const wrap = shallow(
        <ProductItem
            {...testProductItem}
            brand='Nike'
            model='tomato'
            styleCode='banana'
            isDeleted={false}
            isLoading={false}
            deleteProduct={() => console.log('test')}
            openModal={closeModalMock}
            loadProductDetails={new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve(); // Resolve the Promise after a delay
                }, 0); // Delay of 1 second
            })}
        />
    );

    it('should render without throwing an error', () => {
        expect(wrap);
        expect(wrap.length).toBe(1);
    });
    it('should render brandName', () => {
        const brandName = wrap.find('.brand-name');
        expect(brandName.text()).toBe('Nike');
    });
    it('should render brandModel', () => {
        const brandModel = wrap.find('.brand-model');
        expect(brandModel.text()).toBe('tomato');
    });
    it('should render style code', () => {
        const styleCode = wrap.find('.style-code');
        expect(styleCode.text()).toBe(`Style-Code : banana`);
    });
});
