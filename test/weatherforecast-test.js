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
  it("should fine line item with 'Denver'", function() {
    expect(shallow(<WeatherForecast />).contains(<li>Denver</li>)).to.equal(true);
  });

  it("Should find an id for location input in the component file", function() {
    // expect(shallow(<WeatherForecast />).is('#location-input')).to.equal(true);
    assert(shallow(<WeatherForecast />).('#location-input'));
  });

  it.skip("contains spec with an expectation", function() {
    expect(mount(<WeatherForecast />).find('.foo').length).to.equal(1);
  });


  it('should allow me to click the submit button', function() {
     const wrapper = mount(<WeatherForecast />);
     const input = wrapper.find('.location-input')
     input.simulate('change', {target: {value: 'denver'}});
     wrapper.find('.submit-button').simulate('click');
     expect(wrapper.state().location).to.equal('denver');
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

describe('app.jsx should render the WeatherDisplay', function () {
  it('should render the application', function () {
    //define which wrapper i want to use
    const wrapper = mount (<WeatherForecast userInputFieldId='location-input'/>)
    var field = wrapper.find('#location-input').simulate('change', {target: {value: 'denver'} })
    expect(wrapper.state('location')).to.equal('denver')
    // expect(wrapper.props()).to.deep.equal({initialCount: 0})
    //expect the wrapper to be there
  });
});
