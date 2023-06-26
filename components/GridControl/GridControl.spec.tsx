import {shallow} from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import GridControl from './GridControl';
import * as Styled from './GridControl.styles';
import CardHeader from '../CardHeader/CardHeader';

describe('Navbar Header Search', () => {
    const wrapper = shallow(
        <GridControl
            header='tomato'
            changeLayout={() => console.log('tomato')}
            productAmount={25}
        />
    );

    it('should render with no errors', () => {
        expect(wrapper);
        expect(wrapper.length).toBe(1);
    });

    it('should render amount of products with no error', () => {
        const container = wrapper.find(Styled.Container);
        const productAmount = container.find('p');
        expect(productAmount.first().text()).toBe('Found 25 products');
    });
    it('should render correct header text', () => {
        const header = wrapper.find(CardHeader);
        expect(header.length).toBe(1);
    });
});
