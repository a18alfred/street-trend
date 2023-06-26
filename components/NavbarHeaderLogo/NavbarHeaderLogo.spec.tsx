import {shallow} from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';
import * as Styled from './NavbarHeader.styles';

describe('Navbar Header Logo', () => {
    const navHeader = shallow(<NavbarHeaderLogo/>);

    it('should render with no errors', () => {
        expect(navHeader);
        expect(navHeader.length).toBe(1);
    });

    it('should render logo img with correct attributes', () => {
        const logoImg = navHeader.find(Image);

        expect(logoImg.prop('alt')).toBe('street trend logo');
        expect(logoImg.prop('src')).toBe('/street-trend-logo.png');
        expect(logoImg.prop('height')).toBe(50);
        expect(logoImg.prop('width')).toBe(50);
    });

    it('should render correct logo text', () => {
        const street = navHeader.find(Styled.Street);
        expect(street.text()).toBe('Street');
        const trend = navHeader.find(Styled.Trend);
        expect(trend.text()).toBe('Trend');
    });
});
