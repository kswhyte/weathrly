import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import WeatherForecast from '../app/components/WeatherForecast';

const wrapper = shallow(<WeatherForecast />)

it("should have a locationSubmitted function", function() {
  var weather = new WeatherForecast();
  assert.isFunction(weather.locationSubmitted);
});

it('should return the component when a component is given', () => {
  class WeatherForecast extends React.Component {
    render() { return <div />; }
  }
  const foo = mount(<WeatherForecast />).node;
  expect(getNode(foo)).to.equal(foo);
});

describe("A suite", function() {
  it.skip("contains spec with an expectation", function() {
    expect(wrapper.contains(<span>Weathrly</span>)).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(shallow(<WeatherForecast />).is('.foo')).to.equal(true);
  });

  it.skip("contains spec with an expectation", function() {
    expect(mount(<WeatherForecast />).find('.foo').length).to.equal(1);
  });
});
