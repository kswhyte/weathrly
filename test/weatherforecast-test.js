import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render, spy } from 'enzyme';
import WeatherForecast from '../app/components/WeatherForecast';
import App from '../app/components/App';

// const wrapper = shallow(<WeatherForecast />)
describe("WeatherForecast | Unit", function() {
  it("should have a locationSubmitted function", function() {
    var weather = new WeatherForecast();
    assert.isFunction(weather.locationSubmitted);
  });
});

describe("WeatherForecast | Feature", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).contains(<li>Denver</li>)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    // expect(shallow(<WeatherForecast />).is('#location-input')).to.equal(true);
    assert(shallow(<WeatherForecast />).is('#location-input'));
  });

  it.skip("contains spec with an expectation", function() {
    expect(mount(<WeatherForecast />).find('.foo').length).to.equal(1);
  });

  it.skip('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <WeatherForecast onButtonClick={onButtonClick} />
    );
    wrapper.find('submit-button').simulate('click');
     assert(onButtonClick.calledOnce);
    // expect(onButtonClick.calledOnce).to.equal(true);
  });
});
