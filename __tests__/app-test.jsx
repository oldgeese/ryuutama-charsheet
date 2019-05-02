import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../js/app.jsx';
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux';
import searchApp from '../js/reducers';
import { Provider } from 'react-redux';

const store = createStore(searchApp);

test('should render <div />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div')).toHaveLength(1);
});

test('should have Input component when "/input"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/input"]}>
      <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("Input")).toHaveLength(1);
});

test('should have CharSheet component when "/char/:charId"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/char/999999"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("CharSheet")).toHaveLength(1);
});

test('should have Search component when "/search/tag/abc"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/search/tag/abc"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Search component when "/search/title/abc"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/search/title/abc"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Search component when "/search/name/abc"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/search/name/abc"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("Search")).toHaveLength(1);
});

test('should have Input component when "/xyz"', () => {
  const app = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/xyz"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(app.find("Input")).toHaveLength(1);
});
