import {DefaultTheme} from 'styled-components';

export const mainTheme: DefaultTheme = {
    mode: 'dark',
    primaryBg: '#141416',
    secondaryBg: '#1B1D23',
    secondaryBgLighter: 'rgba(20,20,22,0.8)',
    secondaryBgLightest: '#1d2026',
    primaryGolden: '#ffc130',
    secondaryGolden: '#ffa500',
    primaryWhite: '#ffffff',
    primaryRed: '#e83535',
    primaryGray: '#1B1D23',
    darkGray: '#8f8f8f',
    lightGray: '#747B8D',
    lightestGray: '#d0d0d0',
    primaryGreen: '#4BB543',
    activeGreen: '#21fc6b',
    dashboardGrayBg: '#242424',
    dashboardGrayCard: '#1b1b1b',
    brandLogo: '#ffffff',
    borderRadius: '1.5rem',
    borderGrayColor: 'rgba(143, 143, 143, 0.1)',
    selectedOutline: '0 0 0 1px #ffa500;',

    blackToGrayGradient: `linear-gradient(
    180deg,
    #000000 35.5%,
    #151515 50%,
    #383838 78.6%
  )`,

    grayToBlackGradient: `linear-gradient(
    180deg,
    #383838 35.5%,
    #151515 50%,
    #000000 78.6%
  )`,
    maxWidth: '1500px',
    boxShadow: '0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%)',
    boxShadowLg: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

    media: {
        phone: '(max-width: 500px)',
        tablet: '(max-width: 768px)',
        desktop: '(min-width: 800px)',
    },
};
export const secondaryTheme: DefaultTheme = {
    mode: 'light',
    primaryBg: '#ffffff',
    secondaryBg: '#F3F5F6',
    secondaryBgLighter: 'rgba(255,255,255,0.8)',
    secondaryBgLightest: '#eceeef',
    primaryGolden: '#ffa500',
    secondaryGolden: '#ffa500',
    primaryWhite: '#343239',
    primaryRed: '#ff0000',
    primaryGray: '#ffffff',
    darkGray: '#8f8f8f',
    lightGray: '#797E8E',
    lightestGray: '#d0d0d0',
    primaryGreen: '#4BB543',
    activeGreen: '#21fc6b',
    dashboardGrayBg: '#ffffff',
    dashboardGrayCard: '#f4f4f8',
    brandLogo: '#000000',
    borderRadius: '1.5rem',
    borderGrayColor: 'rgba(143, 143, 143, 0.1)',
    selectedOutline: '0 0 0 1px #475be3;',

    blackToGrayGradient: `linear-gradient(
    180deg,
    #f4f4f8 35.5%,
    #f4f4f8 50%,
    rgba(255, 255, 255, 0.9) 78.6%
  )`,

    grayToBlackGradient: `linear-gradient(
    180deg,
    #ffffff 35.5%,
    #f4f4f8 50%,
    #f4f4f8 78.6%
  )`,
    maxWidth: '1500px',
    boxShadow: '0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%)',
    boxShadowLg: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

    media: {
        phone: '(max-width: 500px)',
        tablet: '(max-width: 768px)',
        desktop: '(min-width: 800px)',
    },
};
