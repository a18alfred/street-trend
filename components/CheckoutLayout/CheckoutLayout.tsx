import {useMediaQuery} from '@react-hook/media-query';
import Head from 'next/head';
import React, {ReactNode, useState} from 'react';
import {MdExpandMore, MdShoppingCart, MdExpandLess} from 'react-icons/md';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
import CheckoutProgress from '../CheckoutProgress/CheckoutProgress';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';
import * as Styled from './CheckoutLayout.styles';
import SettingsControl from '../SettingsControl/SettingsControl';
import MobileBottomNavigation from '../MobileBottomNavigation/MobileBottomNavigation';
import Container from '../Container/Container';

interface Props {
    children: ReactNode;
    title: string;
}

const CheckoutLayout = ({children, title}: Props): JSX.Element => {
    const onMobileWidth = useMediaQuery('(max-width: 768px)');
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    const toggleSummary = () => {
        setIsSummaryOpen(prev => !prev);
    };

    return (
        <>
            <Head>
                <meta charSet='utf-8'/>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, user-scalable=no'
                />
                <meta name='theme-color' content='#000000'/>
                <title>{title}</title>
            </Head>
            <Container>
                <Styled.Container>
                    <Styled.LeftColumn>
                        <NavbarHeaderLogo/>
                        <CheckoutProgress/>
                        {children}
                    </Styled.LeftColumn>

                    <Styled.RightColumn>
                        {onMobileWidth ? (
                            <Styled.Details>
                                <summary onClick={toggleSummary}>
                                    <MdShoppingCart className='icon'/> Show order summary{' '}
                                    {isSummaryOpen ? <MdExpandLess className='icon'/> :
                                        <MdExpandMore className='icon'/>}
                                </summary>
                                <CheckoutCart/>
                            </Styled.Details>
                        ) : (
                            <CheckoutCart/>
                        )}
                    </Styled.RightColumn>

                </Styled.Container>
            </Container>
            <SettingsControl/>
            <MobileBottomNavigation/>
        </>
    );
};

export default CheckoutLayout;
