import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import Link from 'next/link';
import * as Styled from './Hero.styles';

interface HighlightedSneaker {
    imgSrc: string;
    sneakerBrand: string;
    sneakerModel: string;
    sneakerId: string;
    sneakerLogoGradient: string;
}

type Props = {
    highlightedSneakers: HighlightedSneaker[];
};
/**
 * Hero Component
 *@function Hero
 *@param {string} imgSrc - src of displayed hero image
 *@param {string} sneakerBrand - text that will display model of highlighted sneaker model
 *@param {string} sneakerModel - name of highlighted sneaker model
 *@returns {JSX.Element} - Rendered Hero component
 */
const Hero = ({highlightedSneakers}: Props): JSX.Element => {
    const [id, setId] = useState(0);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

    const nextSneaker = () => {
        let newId = id + 1;
        if (newId >= highlightedSneakers.length) newId = 0;
        if (intervalID !== null) clearInterval(intervalID);
        setId(newId);
    };
    const previousSneaker = () => {
        let newId = id - 1;
        if (newId < 0) newId = highlightedSneakers.length - 1;
        if (intervalID !== null) clearInterval(intervalID);
        setId(newId);
    };
    const {sneakerBrand, sneakerModel, sneakerId, imgSrc, sneakerLogoGradient} =
        highlightedSneakers[id];

    // this useEffect changes index of highlighted sneaker from "highlightedSneakers"
    useEffect(() => {
        const interval = setInterval(() => {
            setId((prev) => (prev + 1 >= highlightedSneakers.length ? 0 : prev + 1));
        }, 10000);

        setIntervalID(interval);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Styled.Container>
            <Link href={`/products/${sneakerId}`} passHref>
                <Styled.ImageWrap
                    key={id}
                >
                    <Styled.Figcaption>
                        <Styled.Header
                            sneakerLogoGradient={sneakerLogoGradient}
                        >
                            {sneakerBrand}
                        </Styled.Header>
                        <Styled.SubHeader
                            sneakerLogoGradient={sneakerLogoGradient}
                        >
                            {sneakerModel}
                        </Styled.SubHeader>
                    </Styled.Figcaption>

                    <Image
                        src={imgSrc}
                        alt={`${sneakerModel} ${sneakerBrand}`}
                        height={340}
                        width={500}
                        objectFit='contain'
                        className='hero-image'
                        quality={90}
                    />
                </Styled.ImageWrap>
            </Link>

            <Styled.PrevSneaker onClick={previousSneaker}>
                <MdKeyboardArrowLeft className='icon'/>
            </Styled.PrevSneaker>
            <Styled.NextSneaker onClick={nextSneaker}>
                <MdKeyboardArrowRight className='icon'/>
            </Styled.NextSneaker>

        </Styled.Container>
    );
};

export default Hero;
