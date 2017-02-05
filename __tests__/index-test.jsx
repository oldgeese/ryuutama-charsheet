const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);

require('../js/index.jsx');

describe('app.jsx', () => {
  it('<App /> should be rendered without error', () => {
  });

});
