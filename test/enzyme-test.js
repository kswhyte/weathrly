import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).contains(<div className='application-view'>)).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).is('.foo')).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(mount(<WeatherForecast />).find('.foo').length).to.equal(1);
  });
});
