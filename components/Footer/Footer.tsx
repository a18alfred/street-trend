import React from 'react';
import FooterCopyright from '../FooterCopyright/FooterCopyright'
import FooterLinks from '../FooterLinks/FooterLinks'
import {
    footerCopyrightLinks,
} from '../FooterCopyright/footerCopyrightData';
import {
    footerLinksData,
    rewardLinks,
} from '../FooterLinks/footerLinksData';
import FooterSocial from '../FooterSocial/FooterSocial';
import {socialLinks} from '../FooterSocial/socialLinks';
import * as Styled from './Footer.styles';
import Container from '../Container/Container';

/**
 *Combined footer component
 *@function Footer
 *@returns {JSX.Element} - Rendered Footer component
 */
const Footer = (): JSX.Element => {
    return (
        <Container>
            <Styled.Container>
                <FooterSocial footerSocialLinks={socialLinks}/>
                <FooterLinks footerLinks={footerLinksData} rewardLinks={rewardLinks}/>
                <FooterCopyright footerCopyrightLinks={footerCopyrightLinks}/>
            </Styled.Container>
        </Container>
    );
};

export default Footer;
