import React from 'react';
import * as Styled from './CarouselCard.styles';
import {Product} from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import {getItemBrandLogo} from '../../utils/helperFunctions';

export interface Props {
    carouselItem: Product;
}

/**
 *Renders card for Carousel Component
 *@function CarouselCard
 *@param {Product} carouselItem - carousel item info to be mapped to the card
 *@returns {JSX.Element} - Rendered CarouselCard component
 */
const CarouselCard = ({carouselItem}: Props): JSX.Element => {
    const {
        brand,
        model,
        department,
        price,
        images,
        _id: productID,
    } = carouselItem;
    const departmentText = `${department}'s Shoes`;
    const itemTitle = `${brand} ${model}`;

    return (
        <Styled.Container>
            <Styled.BrandBadge>
                <Image
                    height={80}
                    width={80}
                    src={getItemBrandLogo(brand)}
                    objectFit={'contain'}
                    alt={'Brand logo'}
                />
            </Styled.BrandBadge>
            <Styled.Figure>
                <Image
                    src={images[0].url}
                    width={300}
                    height={300}
                    objectFit='contain'
                    alt={itemTitle}
                />
                <Styled.Figcaption>
                    <div>
                        <Styled.Title>{departmentText}</Styled.Title>
                        <Styled.Price>${price}</Styled.Price>
                    </div>
                    <Link href={`/products/${productID}`} passHref>
                        <Styled.A>{itemTitle}</Styled.A>
                    </Link>
                </Styled.Figcaption>
            </Styled.Figure>
        </Styled.Container>
    );
};

export default CarouselCard;
