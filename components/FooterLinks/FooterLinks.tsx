import React from 'react';
import {RouterLinkType} from '../../types';
import RouterLink from '../RouterLink/RouterLink';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as Styled from './FooterLinks.styles';

export interface Props {
    footerLinks: RouterLinkType<string>[];
    rewardLinks: RouterLinkType<string>[];
}

/**
 * Footer Links Section
 *@function FooterLinks
 *@param {array} footerLinks - array of objects for footer links
 *@param {array} rewardLinks - array of objects for reward links
 *@returns {JSX.Element} - Rendered Footer Links Section
 */
const FooterLinks = ({footerLinks, rewardLinks}: Props): JSX.Element => {
    return (
        <Styled.Container>
            <div className='footer-links'>
                <SectionHeader headerText='Customer support'/>
                <ul>
                    {footerLinks.map((link, id) => (
                        <li key={id}>
                            <RouterLink href={link.href}>{link.text}</RouterLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='footer-rewards'>
                <SectionHeader headerText='Loyalty rewards'/>
                <ul>
                    {rewardLinks.map((link, id) => (
                        <li key={id}>
                            <RouterLink href={link.href}>{link.text}</RouterLink>
                        </li>
                    ))}
                    <li>
                        <RouterLink href='street-trend'>
                            <Styled.StreetTrendPlus>
                                STREETTREND+
                            </Styled.StreetTrendPlus>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </Styled.Container>
    );
};

export default FooterLinks;
