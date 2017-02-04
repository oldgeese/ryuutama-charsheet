import React from 'react';
import CharSheet from './charsheet.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charIdInput: false,
      charId: "962930"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  handleSubmit(event) {
    if (this.state.charId) {
      this.setState({
        charIdInput: true,
      })
    }
    event.preventDefault();
  }
  render() {
    if (this.state.charIdInput) {
      return (
        <CharSheet charId ={this.state.charId} />
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              キャラクターのIDを入力してください。
            </div>
            <div>
              <input type="text" size="60" name="charId"
                value={this.state.charId} onChange={this.handleInputChange} />
            </div>
            <div>
              <input type="submit" value="入力" />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default App;
