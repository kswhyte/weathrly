import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app/components/App';

describe('App | Feature', function() {

  it('should find the WeatherForecast component call', function() {
    assert(shallow(<App />).contains(<div> <WeatherForecast /> </div>));
    // expect(shallow(<App />).contains(<WeatherForecast />)).to.equal(true);
  });
});
