import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../js/app.jsx';

describe('app.jsx', () => {
  it('should render <div /> when charId not yet inputed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should render <CharSheet /> when charId inputed', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      charId: "962930",
      charIdInput: true,
    });
    expect(wrapper.find('CharSheet')).toHaveLength(1);
  });

});
