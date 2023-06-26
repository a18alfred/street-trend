import {shallow} from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Layout from './Layout';
import {mainTheme} from '../../theme/main';
import {ThemeProvider} from 'styled-components';

describe('Main Layout wrapper component', () => {
    const wrapper = shallow(
        <ThemeProvider theme={mainTheme}>
            <Layout title='tomato'>
                <h1>Children</h1>
            </Layout>
        </ThemeProvider>
    );

    it('should render with no errors', () => {
        expect(wrapper);
        expect(wrapper.length).toBe(1);
    });

    it('should render correct title', () => {
        const titleProp = wrapper.find(Layout).prop('title');
        expect(titleProp).toBe('tomato');
    });

    it('should render wrapped children', () => {
        const children = wrapper.find('h1');
        expect(children.length).toBe(1);
        expect(children.text()).toBe('Children');
    });
});
