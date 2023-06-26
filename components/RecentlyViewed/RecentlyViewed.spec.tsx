import {shallow} from 'enzyme';
import React from 'react';
import {store} from '../../state';
import {withReduxAndStyledProviders} from '../../test/testUtils';
import CarouselCard from '../CarouselCard/CarouselCard';
import RecentlyViewed from './RecentlyViewed';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(withReduxAndStyledProviders(<RecentlyViewed/>));
};

describe('Footer contact/reward links Section', () => {
    const wrap = setup();

    it('should render without throwing an error', () => {
        expect(wrap);
        expect(wrap.length).toBe(1);
    });

    it('should render all viewed products that are currently in state', () => {
        const viewedProducts = wrap.find(CarouselCard);
        const productsInStore = store.getState().recentlyViewed.viewedProducts;
        expect(viewedProducts.length).toBe(productsInStore.length);
    });
});
