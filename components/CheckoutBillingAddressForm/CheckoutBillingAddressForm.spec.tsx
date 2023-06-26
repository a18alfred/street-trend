import { mount } from 'enzyme';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import CheckoutBillingAddressForm from './CheckoutBillingAddressForm';
import FormikTextField from '../FormikTextField/FormikTextField';
import Button from '../Button/Button';

/**
 * Setup function for the component
 * @returns {JSX.Element} mountWrapper
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CheckoutBillingAddressForm />));
};

describe('Checkout Billing Address form component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all form controls', () => {
    const formControl = wrap.find(FormikTextField);
    expect(formControl.length).toBe(9);
  });
  it('should render submit button', () => {
    const submitBtn = wrap.find(Button);
    expect(submitBtn.length).toBe(1);
  });
});
