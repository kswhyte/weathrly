import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import WeatherForecast from '../app/components/WeatherForecast';

// const wrapper = shallow(<WeatherForecast />)

it("should have a locationSubmitted function", function() {
  var weather = new WeatherForecast();
  assert.isFunction(weather.locationSubmitted);
});

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).contains(<li>Denver</li>)).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).is('.foo')).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(mount(<WeatherForecast />).find('.foo').length).to.equal(1);
  });
});
