import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../js/app.jsx';

describe('app.jsx', () => {
  it('should render <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

});
