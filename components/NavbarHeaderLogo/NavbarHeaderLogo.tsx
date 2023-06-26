import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as Styled from './NavbarHeader.styles';

/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = (): JSX.Element => {
    return (
        <Styled.HeaderLogo>
            <Styled.ImageWrapper>
                <Image
                    src='/street-trend-logo.png'
                    alt='street trend logo'
                    height={50}
                    width={50}
                    quality={100}
                    objectFit='contain'
                />
            </Styled.ImageWrapper>
            <Link href='/' passHref>
                <Styled.Street>Street</Styled.Street>
            </Link>
            <Styled.Trend>Trend</Styled.Trend>
        </Styled.HeaderLogo>
    );
};

export default NavbarHeaderLogo;
