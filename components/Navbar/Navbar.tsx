import React from 'react';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import NavbarHeader from '../NavbarHeader/NavbarHeader';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';
import * as Styled from './Navbar.styles';

/**
 * Renders navbar with its specified content
 *@function Navbar
 *@returns {JSX.Element} - Rendered Navbar
 */
const Navbar = (): JSX.Element => {
    return (
        <>
            <Styled.Container>
                <NavbarHeader/>
                <NavbarNavigation/>
                {/* Mobile Navbar will be shown only on mobile width */}
                <MobileNavbar/>
            </Styled.Container>
            <Styled.Spacer/>
        </>
    );
};
export default Navbar;
