import Image from 'next/image';
import React from 'react';
import * as Styled from './SneakerLoader.styles';

/**
 * Utility Loader
 *@function SneakerLoader
 *@returns {JSX.Element} - Rendered SneakerLoader component
 */
const SneakerLoader = (): JSX.Element => {
    return (
        <Styled.Container>
            <Styled.ImageWrapper>
                <Image
                    alt='Street trend spinning logo'
                    height={150}
                    width={240}
                    objectFit='contain'
                    src='/logo.png'
                />
            </Styled.ImageWrapper>
        </Styled.Container>
    );
};

export default SneakerLoader;
