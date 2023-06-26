import NextImage from 'next/image';
import React, {useRef} from 'react';
import useHover from '../../hooks/useHover';
import {Image} from '../../types';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './ProductCard.styles';

export interface Props {
    brandName: string;
    productModel: string;
    productPrice: string;
    images: Image[];
    productID: string;
}

/**
 *@function ProductCard
 *@param {string} brandName - displayed product brand
 *@param {string} productModel - displayed product model
 *@param {string} productPrice - displayed product price
 *@param {array} images - array of Image Objects from cloudinary CDN has .url and public_id
 *@param {string} productID - database product ID
 *@returns {JSX.Element} - Rendered HorizontalCard component to display products on IndexPage
 */
const ProductCard = ({
                         brandName,
                         productModel,
                         productPrice,
                         images,
                         productID,
                     }: Props): JSX.Element => {
    // We will use image ref to target Image of Card to change img.src on hovering
    const imageRef = useRef<HTMLElement>(null);
    const isHovering = useHover(imageRef);
    // If image has more than two image urls, it will be changing img.src on hovering
    const firstImage = images[0].url;
    let secondImage = firstImage;
    if (images.length >= 2) {
        secondImage = images[1].url;
    }

    return (
        <RouterLink href={`/products/${productID}`}>
            <Styled.Card>
                <Styled.CardImage ref={imageRef}>
                    <NextImage
                        src={isHovering ? secondImage : firstImage}
                        alt={`${brandName} ${productModel}`}
                        height={200}
                        width={200}
                        objectFit='contain'
                        className='card-img'
                    />
                </Styled.CardImage>
                <Styled.TextWrap>
                    <h3>{brandName + ' ' + productModel}</h3>
                    <Styled.Price>${productPrice}</Styled.Price>
                </Styled.TextWrap>

            </Styled.Card>
        </RouterLink>
    );
};
export default ProductCard;
