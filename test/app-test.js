import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app/components/App';

describe('App | Feature', function() {

  it('contains spec with an expectation', function() {
    expect(shallow(<App />).contains(<span>Weathrly</span>)).to.equal(true);
  });

  it.skip('should allow me to click the submit button', function() {
     const wrapper = mount(<App />);
     const input = wrapper.find('.location-input')
     input.simulate('change', {target: {value: 'denver'}});
     wrapper.find('.submit-button').simulate('click');
     expect(wrapper.state().location).to.equal('denver');
  });
});
