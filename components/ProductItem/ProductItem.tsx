import Image from 'next/image';
import React, { ReactNode } from 'react';
import UpdateProduct from '../../components/AdminUpdateProduct/AdminUpdateProduct';
import { Product } from '../../types';
import { UiAction } from '../../types/uiTypes';
import Button from '../Button/Button';
import * as Styled from './ProductItem.styles';

export type Props = Product & {
  isLoading: boolean;
  isDeleted: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteProduct: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadProductDetails: any;
  openModal: (modalContent: {
    modalYposition: number;
    modalContent: ReactNode;
  }) => UiAction;
};
/**
 *Product list item component used to display, delete, update products in Admin dashboard
 *@function ProductItem
 *@param {object} props - React.props point to global type Project
 *@returns {JSX.Element} - Rendered component ProductItem
 */

const ProductItem = ({
  brand,
  model,
  styleCode,
  _id,
  deleteProduct,
  loadProductDetails,
  openModal,
  isLoading,
  isDeleted,
  images,
}: Props): JSX.Element => {
  const handleDeleteProduct = () => {
    if (confirm('Do you want to delete this product?')) {
      if (_id !== undefined) deleteProduct(_id);
    }
  };

  // will fetch product details to global state and then open modal (which will get product details from global state)
  const handleUpdateProduct = async () => {
    if (_id !== undefined) {
      await loadProductDetails(_id);
      openModal({
        modalYposition: window.scrollY,
        modalContent: <UpdateProduct />,
      });
    }
  };

  // image will always be specified, but to satisfy typescript will provide fallback
  const imagePreview = images ? images[0].url : '/images/generic-sneaker.svg';

  return (
    <Styled.StyledListItem>
      <Styled.Article>
        <Image
          src={imagePreview}
          alt={`${brand} ${model}`}
          height={70}
          width={70}
          objectFit={'contain'}
        />
        <p className="brand-name">{brand}</p>
        <p className="brand-model">{model}</p>
        <p className="style-code">Style-Code : {styleCode}</p>
        <Styled.BtnWrap>
          <Button
            onClick={handleDeleteProduct}
            isLoading={isLoading}
            isCompleted={isDeleted}
          >
            {isDeleted ? 'Deleted' : 'Delete'}
          </Button>
          <Button onClick={handleUpdateProduct}>Update</Button>
        </Styled.BtnWrap>
      </Styled.Article>
    </Styled.StyledListItem>
  );
};

export default ProductItem;
