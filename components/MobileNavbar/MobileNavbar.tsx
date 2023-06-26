import React, {useCallback, useEffect, useRef, useState} from 'react';
import {MdOutlineDarkMode, MdOutlineLightMode, MdClose, MdMenu, MdSearch} from 'react-icons/md';
import {navLinks} from '../NavbarNavigation/navigationData';
import NavCart from '../NavCart/NavCart';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import NavLink from '../NavLink/NavLink';
import NavUserAccount from '../NavUserAccount/NavUserAccount';
import * as Styled from './MobileNavbar.styles';
import {useTheme} from 'styled-components';
import {useActions} from '../../hooks/useActions';

/**
 * This navbar will be shown only on mobile views
 *@function MobileNavbar
 *@returns {JSX.Element} - Rendered MobileNavbar component
 */

const MobileNavbar = (): JSX.Element => {
    const theme = useTheme();
    const [isSearchOnScreen, setIsSearchOnScreen] = useState(false);
    const [isNavigationOnScreen, setIsNavigationOnScreen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const rightControlRef = useRef<HTMLDivElement>(null);

    const {changeTheme} = useActions();
    const toggleTheme = useCallback(() => {
        changeTheme();
    }, [changeTheme]);
    const toggleSearchVisibility = () => setIsSearchOnScreen((prev) => !prev);
    const toggleNavigationVisibility = () =>
        setIsNavigationOnScreen((prev) => !prev);

    // this useEffect is responsible for closing results modal dropdown if user clicked outside of modal
    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (
                isSearchOnScreen &&
                searchRef.current &&
                rightControlRef.current &&
                !searchRef.current.contains(e.target as Node) &&
                !rightControlRef.current.contains(e.target as Node)
            ) {
                setIsSearchOnScreen(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [isSearchOnScreen]);

    useEffect(() => {
        const closeMenu = () => {
            if (isSearchOnScreen) setIsSearchOnScreen(false)
            if (isNavigationOnScreen) setIsNavigationOnScreen(false)
        };
        window.addEventListener('resize', closeMenu);
        return () => {
            window.removeEventListener('resize', closeMenu);
        };
    }, [isSearchOnScreen, isNavigationOnScreen]);

    return (
        <>
            <Styled.Container>

                {isNavigationOnScreen ? (
                    <MdClose
                        className='mobile-icon'
                        onClick={toggleNavigationVisibility}
                    />
                ) : (
                    <MdMenu
                        className='mobile-icon'
                        onClick={toggleNavigationVisibility}
                    />
                )}

                <Styled.RightControl>
                    <div ref={rightControlRef}>
                        <MdSearch className='mobile-icon' onClick={toggleSearchVisibility}/>
                    </div>
                    <NavUserAccount/>
                    <NavCart/>
                </Styled.RightControl>

            </Styled.Container>
            {/* Search bar will be controlled through local state */}
            {isSearchOnScreen && (
                <Styled.SearchContainer height='auto' ref={searchRef}>
                    <NavHeaderSearch/>
                </Styled.SearchContainer>
            )}
            {/* Navigation bar will be controlled through local state */}
            {isNavigationOnScreen && (
                <Styled.SearchContainer height='100vh'>
                    <ul>
                        {navLinks.map((link, id) => (
                            <li key={id} onClick={toggleNavigationVisibility}>
                                <NavLink href={`/products/all`} linkText={link.section}/>
                            </li>
                        ))}
                    </ul>
                    <Styled.ThemeControl onClick={toggleTheme}>
                        {
                            theme.mode === 'dark'
                                ? <MdOutlineLightMode/>
                                : <MdOutlineDarkMode/>
                        }
                    </Styled.ThemeControl>

                </Styled.SearchContainer>
            )}
        </>
    );
};

export default MobileNavbar;
