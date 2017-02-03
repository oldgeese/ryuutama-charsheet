import React from 'react';
import ReactDOM from 'react-dom';
import CharSheet from './charsheet.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charIdInput = false,
      charId = ""
    };
  }
  render() {
    if (this.state.charIdInput) {
      <CharSheet charId ={this.state.charId} />
    } else {
      <div>
        <form>
        <div>
          キャラクターのIDを入力してください。
        </div>
        <div>
          <input type="text" size="60" name="charId"/>
        </div>
        <div>
          <button onClick={()=> this.handleInputClick()}>入力</button>
        </div>
        </form>
      </div>
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
