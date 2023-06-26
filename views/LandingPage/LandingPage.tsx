import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import {Product} from '../../types';
import {highlightedSneakers} from './landingPageData';
import MobileProducts from '../../components/MobileProducts/MobileProducts';
import * as Styled from './LandingPage.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import {getDataForLandingPageSections} from '../../utils/helperFunctions';
import Carousel from '../../components/Carousel/Carousel';

export interface Props {
    products: Product[];
    areProductsLoading: boolean;
}

/**
 *@function LandingPage
 *@param {Product[]} products - array of highlighted products to be displayed in WhatsHot section
 *@param {boolean} areProductsLoading - state of loading, based on WhatsHot or Skeleton will be rendered
 *@returns {JSX.Element} - Rendered LandingPage component
 */
const LandingPage = ({products, areProductsLoading}: Props): JSX.Element => {
    const {hotProducts, newBalanceSneakers, converseSneakers, nikeSneakers} =
        getDataForLandingPageSections(products);

    return (
        <Styled.Container>
            <Hero highlightedSneakers={highlightedSneakers}/>
            {areProductsLoading ? (
                <Skeleton variant='whatsHot'/>
            ) : (<WhatsHot products={hotProducts}/>)}

            <br/>
            <br/>
            <br/>
            <br/>

            <Carousel
                carouselHeader={'The Latest 🚀'}
                carouselItems={products}
            />

            <Styled.ProductsSection>
                <PageHeader headerText={`Shop by brand`}/>
                <MobileProducts
                    products={newBalanceSneakers}
                    brandName={'new balance'}
                    brandImage='/images/brands/New_Balance.svg'
                    logoParams={{height: 100, width: 100}}
                />
                <MobileProducts
                    products={nikeSneakers}
                    brandName={'nike'}
                    brandImage='/images/brands/Nike.svg'
                    logoParams={{height: 100, width: 100}}
                />

                <MobileProducts
                    products={converseSneakers}
                    brandName={'converse'}
                    brandImage='/images/brands/Converse.svg'
                    logoParams={{height: 100, width: 100}}
                />
                <br/>
            </Styled.ProductsSection>

        </Styled.Container>
    );
};

export default LandingPage;
