import Link from 'next/link';
import React from 'react';
import {mobileBottomNavData} from './MobileBottomNavData';
import * as Styled from './MobileBottomNavigation.styles';
import {useRouter} from 'next/router'
import {isInstalled} from '../../utils/helperFunctions';

/**
 *Component with bottom navigation links and toggle theme button
 *@ONLY for mobile widths
 *@function MobileBottomNavigation
 *@returns {JSX.Element} - Rendered MobileBottomNavigation component
 */
const MobileBottomNavigation = (): JSX.Element => {
    const padding = isInstalled() ? '0rem 1rem 1rem 1rem' : '0.75rem 1rem 1rem 1rem'
    const height = isInstalled() ? '80px' : '70px'
    const router = useRouter()
    const isActive = (link?: string): boolean => {
        if (!link) return false

        if (link === '/') {
            if (router.pathname === '/') return true
        } else {
            return router.pathname.includes(link)
        }

        return false
    }

    return (
        <Styled.Container padding={padding} height={height}>
            <Styled.IconList>
                {mobileBottomNavData.map((link) => (
                    <Styled.LI key={link.id}>
                        <Link href={link.href} passHref>
                            <Styled.LinkWrapper
                                isActive={isActive(link.linkCheck)}
                            >
                                <Styled.Icon>{link.icon}</Styled.Icon>
                                <Styled.IconText>{link.text}</Styled.IconText>
                            </Styled.LinkWrapper>
                        </Link>
                    </Styled.LI>
                ))}
            </Styled.IconList>
        </Styled.Container>
    );
};

export default MobileBottomNavigation;
