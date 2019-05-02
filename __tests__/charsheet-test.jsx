jest.mock('../js/data.jsx');

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CharSheet from '../js/charsheet.jsx';
import {sheetData} from '../js/data.jsx';

import { MemoryRouter, withRouter } from 'react-router-dom'

const CharSheetWithRouter = withRouter(CharSheet)

test('full DOM rendering', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ "/char/962930" ]}>
      <CharSheetWithRouter charId="962930"/>
    </MemoryRouter>
  );
  expect(wrapper.find('CharSheet')).toHaveLength(1);

  return sheetData("962930")
    .then((res) => {
      wrapper.update();
      expect(wrapper.find('CharSheet')).toHaveLength(1);
      expect(wrapper.find('RyutamaSheet')).toHaveLength(1);
    });
});
