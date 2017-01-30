jest.mock('../js/sheetdata');

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CharSheet from '../js/app';


describe('<CharSheet/>' ()=> {
  it('full DOM rendering', () => {
    const wrapper = mount(<CharSheet />);
  });
});