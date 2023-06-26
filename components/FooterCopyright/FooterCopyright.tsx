import React, {FC} from 'react';
import {RouterLinkType} from '../../types';
import HR from '../HR/HR';
import RouterLink from '../RouterLink/RouterLink';
import {FooterCopyrightSection} from './FooterCopyright.styles';

export interface Props {
    footerCopyrightLinks: RouterLinkType<string>[];
}

/**
 * Footer Copyright Section
 *@function FooterCopyright
 *@param {array} footerCopyrightLinks - array of objects for footer copyright links
 *@returns {JSX.Element} - Rendered Footer Copyright Section
 */
const FooterCopyright: FC<Props> = ({footerCopyrightLinks}): JSX.Element => {
    return (
        <>
            <HR/>
            <FooterCopyrightSection>
                <ul>
                    {footerCopyrightLinks.map((link, id) => (
                        <li key={id}>
                            <RouterLink href={link.href} fontSize={'0.75rem'}>
                                {link.text}
                            </RouterLink>
                        </li>
                    ))}
                </ul>
                <p>©{new Date().getFullYear()} Street-Trend.vercel.app . All Rights Reserved.</p>
            </FooterCopyrightSection>
        </>
    );
};

export default FooterCopyright;
