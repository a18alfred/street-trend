import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import HorizontalCard from './HorizontalCard';
import * as Styled from './HorizontalCard.styles';

const cardImages = [
  { public_id: '/images/990v6_1.webp', url: '/images/990v6_1.webp' },
  { public_id: '/images/990v6_1.webp', url: '/images/990v6_2.webp' },
];

describe('HorizontalCard', () => {
  const wrap = shallow(
    <HorizontalCard
      brandName="Nike"
      productModel="Roche Run"
      productPrice="777"
      images={cardImages}
      productID="xyz"
    />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render image with specified attributes', () => {
    const cardImg = wrap.find('.card-img');
    expect(cardImg.length).toBe(1);
    expect(cardImg.prop('alt')).toBe('Nike Roche Run');
  });
  it('should render specified price', () => {
    const price = wrap.find(Styled.Price);
    expect(price.text()).toBe('$777');
  });
});
