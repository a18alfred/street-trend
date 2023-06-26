import Head from 'next/head';
import React, {FC, ReactNode} from 'react';
import Footer from '../Footer/Footer';
import MobileBottomNavigation from '../MobileBottomNavigation/MobileBottomNavigation';
import Navbar from '../Navbar/Navbar';
import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp';
import SettingsControl from '../SettingsControl/SettingsControl';
import {useTheme} from 'styled-components';
import Container from '../Container/Container';

interface Props {
    children: ReactNode;
    title: string;
}

const Layout: FC<Props> = ({children, title}) => {
    const theme = useTheme();
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;
    
    return (
        <>
            <Head>
                <meta charSet='utf-8'/>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, user-scalable=no'
                />
                <meta name='theme-color' content={theme.mode === 'light' ? '#FDFDFDFF' : '#141416'}/>
                <title>{title}</title>
            </Head>
            <Navbar/>
            <SettingsControl/>
            <MobileBottomNavigation/>
            <Container>
                {children}
            </Container>
            <NewsletterSignUp/>
            <Footer/>
        </>
    );
};

export default Layout;
