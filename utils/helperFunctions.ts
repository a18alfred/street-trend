import {Product, Review, SneakerBrand} from '../types';

/**
 * @EXPORTS
 */
export {getAverageRating, getDropdownItems, getDataForLandingPageSections};

/**
 * @method getAverageRating
 * @param  {Review[]} productReviews - array of review objects
 * @returns {number} - calculated average rating to be displayed
 */
const getAverageRating = (productReviews: Review[]): number => {
    if (productReviews.length < 1) return 0;

    const totalRating = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    return Math.round(totalRating / productReviews.length);
};

/**
 *@method getDropdownItems
 *@param {Product[]} products - array of all products in which search will be performed
 *@param {string} searchTerm - search term typed in a search bar
 *@returns {Product[]} - Array of products, with name or model that include specified "searchTerm"
 */
const getDropdownItems = (
    searchTerm: string,
    products: Product[]
): Product[] => {
    searchTerm = searchTerm.toLowerCase();
    let allProducts = [...products];

    if (searchTerm !== undefined) {
        allProducts = allProducts.filter(
            (product) =>
                product.brand.toLowerCase().includes(searchTerm) ||
                product.model.toLowerCase().includes(searchTerm)
        );

        return allProducts.slice(0, 4);
    }

    return [];
};

/**
 *@method getDataForLandingPageSections
 *@param {Product[]} products - array of all products in which search will be performed
 *@returns {object} - object with adidas, nike, jordan and highlighted sneakers
 */
const getDataForLandingPageSections = (
    products: Product[]
): {
    hotProducts: Product[];
    newBalanceSneakers: Product[];
    nikeSneakers: Product[];
    converseSneakers: Product[];
} => {
    const hotProducts = [];
    const newBalanceSneakers = [];
    const nikeSneakers = [];
    const converseSneakers = [];

    for (const product of products) {
        if (product.isFeatured) hotProducts.push(product);
        if (product.brand === 'New Balance') newBalanceSneakers.push(product);
        if (product.brand === 'Converse') converseSneakers.push(product);
        if (product.brand === 'Nike') nikeSneakers.push(product);
    }

    return {
        hotProducts,
        newBalanceSneakers,
        nikeSneakers,
        converseSneakers,
    };
};

/**
 * Retrieves the path to the brand logo based on the brand name.
 *
 * @param {SneakerBrand} brandName - The brand name of the sneaker.
 * @returns {string} - The path to the brand logo image.
 */
export const getItemBrandLogo = (brandName: SneakerBrand): string => {
    if (brandName === 'Nike') return '/images/brands/Nike.svg';
    if (brandName === 'Adidas') return '/images/brands/Adidas.svg';
    if (brandName === 'New Balance') return '/images/brands/New_Balance.svg';
    if (brandName === 'Puma') return '/images/brands/Puma.svg';
    if (brandName === 'Converse') return '/images/brands/Converse.svg';
    return '/images/brands/Nike.svg'; // Default logo
}

/**
 * Scrolls to a section with the specified ID.
 * @param {string} sectionId - The ID of the section to scroll to.
 */
export const scrollToSection = (sectionId: string, topOffset: number): void => {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - topOffset,
            behavior: 'smooth',
        });
    }
};

/**
 * Checks if the display mode is standalone.
 * @returns {boolean} - Returns true if PWA is installed.
 */
export const isInstalled = (): boolean =>
    (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches);


