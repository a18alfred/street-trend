import React, {useState} from 'react';
import Container from '../Container/Container';
import NavigationDropdown from '../NavDropdown/NavDropdown';
import NavLink from '../NavLink/NavLink';
import NavPictureDropdown from '../NavPictureDropdown/NavPictureDropdown';
import {navLinks} from './navigationData';
import * as Styled from './NavbarNavigation.styles';

/**
 *Presentational Navbar Navigation Component
 *@function NavbarNavigation
 *@returns {JSX.Element} - Rendered list navigation links
 */
const NavbarNavigation = (): JSX.Element => {
    const [section, setSection] = useState('');

    const findDropdownContentBy = (section: string) =>
        navLinks.find((link) => link.section === section);

    return (
        <Styled.Navigation onMouseLeave={() => setSection(() => '')}>
            <Container>
                <ul>
                    {navLinks.map((link, id) => (
                        <li
                            key={id}
                            onMouseEnter={() => setSection(link.section)}
                            onFocus={() => setSection(link.section)}
                        >
                            <NavLink href={`/products/all`} linkText={link.section}/>
                        </li>
                    ))}
                </ul>
                {/* For NewArrivals section we will display Picture Dropdown */}
                {section === 'new arrivals' && <NavPictureDropdown/>}
                {section === 'sale' && <NavPictureDropdown/>}
                {/* For all other section - plain Navigation Dropdown */}
                {section && section !== 'new arrivals' && section !== 'sale' && (
                    <NavigationDropdown
                        dropdownContent={findDropdownContentBy(section)!}
                        sectionName={section}
                    />
                )}
            </Container>
        </Styled.Navigation>
    );
};

export default NavbarNavigation;
