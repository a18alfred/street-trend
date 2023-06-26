import React from 'react';
import {Product} from '../../types';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import ProductImageCard from '../ProductImageCard/ProductImageCard';
import ReviewCard from '../ReviewCard/ReviewCard';
import * as Styled from './ProductDetails.styles';
import {useMediaQuery} from '@react-hook/media-query';

interface Props {
    product: Product;
}

/**
 * purely representational component will map pre-fetched product JSON in ProductDetailsPage
 *@function ProductDetails
 *@param {object} product - JSON of type Product
 *@returns {JSX.Element} - Rendered ProductDetails component
 */
const ProductDetails = ({product}: Props): JSX.Element => {
    const onMobileWidth = useMediaQuery('only screen and (max-width: 768px)');

    const {
        _id,
        brand,
        colors,
        model,
        description,
        department,
        size,
        price,
        styleCode,
        images,
    } = product;
    return (
        <Styled.Container>
            <Styled.TopRow>
                <Styled.RowHalf>
                    <ProductImageCard
                        images={images && images}
                        sneakerBrand={`${brand} ${model}`}
                    />
                </Styled.RowHalf>
                <Styled.RowHalf>
                    <ProductDetailsCard
                        productID={_id}
                        productImg={images && images[0].url}
                        brand={brand}
                        colors={colors}
                        department={department}
                        size={size}
                        model={model}
                        price={price}
                        styleCode={styleCode}
                        onMobileWidth={onMobileWidth}
                    />
                </Styled.RowHalf>
            </Styled.TopRow>
            <DescriptionCard description={description}/>
            <ReviewCard/>
        </Styled.Container>
    );
};
export default ProductDetails;
