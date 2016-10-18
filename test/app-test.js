import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app/components/App';

describe('App | Feature', function() {

  it.skip('should render an `#application`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#application')).to.have.length(1);
  });

  it.skip('should render children when passed in', () => {
    const wrapper = shallow(
      <div className='weatherDisplay'>
        <WeatherForecast />
      </div>
    );
    expect(wrapper.contains(<div className="weatherDisplay" />)).to.equal(true);
  });
});
