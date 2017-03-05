jest.mock('../js/data.jsx');

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CharSheet from '../js/charsheet.jsx';
import {sheetData} from '../js/data.jsx';

describe('charsheet.jsx', () => {
  it('full DOM rendering', () => {
    const wrapper = mount(<CharSheet charId="962930"/>);
    // let tree = wrapper.debug();
    // console.log(tree);
    expect(wrapper.find('CharSheet')).toHaveLength(1);

    // return sheetData("962930")
    //   .then((res) => {
    //     wrapper.update();
    //     // console.log(wrapper.debug());
    //     expect(wrapper.find('CharSheet')).toHaveLength(1);
    //     expect(wrapper.find('RyutamaSheet')).toHaveLength(1);
    //   });
  });
});
