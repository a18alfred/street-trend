import React from 'react';
import {MdAccountBox, MdHome, MdShopTwo, MdSms, MdShoppingCart} from 'react-icons/md';

export const mobileBottomNavData = [
    {
        id: 1,
        href: '/',
        icon: <MdHome className='icon'/>,
        text: 'Home',
        linkCheck: '/'
    },
    {
        id: 2,
        href: '/products/all',
        icon: <MdShopTwo className='icon'/>,
        text: 'Products',
        linkCheck: '/products/'
    },
    {
        id: 3,
        href: '/cart',
        icon: <MdShoppingCart className='icon'/>,
        text: 'Cart',
        linkCheck: '/cart'
    },
    {
        id: 4,
        href: '/account',
        icon: <MdAccountBox className='icon'/>,
        text: 'Account',
        linkCheck: '/account'
    },
    {
        id: 5,
        href: '/contact',
        icon: <MdSms className='icon'/>,
        text: 'contact',
        linkCheck: '/contact'
    },
];
