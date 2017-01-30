jest.mock('../js/sheetdata.jsx');

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CharSheet from '../js/charsheet.jsx';
import getSheetData from '../js/sheetdata.jsx';

describe('<CharSheet/>', () => {
  it('full DOM rendering', () => {
    const wrapper = mount(<CharSheet />);
    // let tree = wrapper.debug();
    // console.log(tree);
    expect(wrapper.find('CharSheet')).toHaveLength(1);

    return getSheetData()
      .then((res) => {
        wrapper.update();
        // console.log(wrapper.debug());
        expect(wrapper.find('CharSheet')).toHaveLength(1);
        expect(wrapper.find('RyutamaSheet')).toHaveLength(1);
      });
  });
});
