import App from '../js/app.jsx';
jest.mock('../js/app.jsx');

const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);

require('../js/index.jsx');

test('render function should run without error', () => {
});
