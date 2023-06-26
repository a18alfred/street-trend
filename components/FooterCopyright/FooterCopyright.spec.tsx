import { shallow } from 'enzyme';
import React from 'react';
import  { footerCopyrightLinks } from './footerCopyrightData';
import FooterCopyright from './FooterCopyright';

describe('Footer Copyright Section', () => {
  const wrap = shallow(
    <FooterCopyright footerCopyrightLinks={footerCopyrightLinks} />
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all copyright links', () => {
    const copyrightLinks = wrap.find('li');
    expect(copyrightLinks.length).toBe(footerCopyrightLinks.length);
  });
});
