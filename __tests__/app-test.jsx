import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../js/app.jsx';
import { MemoryRouter } from 'react-router-dom'

test('should render <div />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div')).toHaveLength(1);
});

test('should have Input component when "/input"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/input"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("Input")).toHaveLength(1);
});

test('should have CharSheet component when "/char/:charId"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/char/999999"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("CharSheet")).toHaveLength(1);
});

test('should have Search component when "/search/tag/abc"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/search/tag/abc"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Search component when "/search/title/abc"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/search/title/abc"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Search component when "/search/name/abc"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/search/name/abc"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Input component when "/xyz"', () => {
  const app = mount(
    <MemoryRouter initialEntries={["/xyz"]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find("Input")).toHaveLength(1);
});
