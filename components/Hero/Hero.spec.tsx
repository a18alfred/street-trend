import { shallow } from 'enzyme';
import Image from 'next/image';
import React from 'react';
import Hero from './Hero';
import * as Styled from './Hero.styles';

const heroProps = {
  imgSrc: '/test.img',
  sneakerModel: 'nike',
  sneakerBrand: 'roche',
  sneakerLogoGradient: 'test',
};

describe('Hero component', () => {
  const wrapper = shallow(<Hero highlightedSneakers={[heroProps]} />);
  it('should render component with no errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render correct sneaker model', () => {
    const sneakerModel = wrapper.find(Styled.Header);
    expect(sneakerModel.text()).toBe(heroProps.sneakerBrand);
  });
  it('should render correct sneaker name', () => {
    const sneakerName = wrapper.find(Styled.SubHeader);
    expect(sneakerName.text()).toBe(heroProps.sneakerModel);
  });

  it('should render specified src and alt on hero image', () => {
    const heroImg = wrapper.find(Image);
    expect(heroImg.prop('src')).toBe(heroProps.imgSrc);
    expect(heroImg.prop('alt')).toBe(
      `${heroProps.sneakerModel} ${heroProps.sneakerBrand}`
    );
  });
});
