import {mount} from 'enzyme';
import React from 'react';
import {withReduxAndStyledProviders} from '../../test/testUtils';
import MobileBottomNavigation from './MobileBottomNavigation';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return mount(withReduxAndStyledProviders(<MobileBottomNavigation/>));
};

jest.mock('../../utils/helperFunctions', () => ({
    isInstalled: () => false,
}));

// Mock the router
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockReturnValue({
        pathname: '/mocked-path', // Set the desired mocked pathname here
    }),
}));

describe('AdminAllReviews Component', () => {
    const wrap = setup();

    it('should render without throwing an error', () => {
        expect(wrap);
        expect(wrap.length).toBe(1);
    });

    it('should render all specified icon links', () => {
        const icons = wrap.find('li');
        expect(icons.length).toBe(5);
    });
});
