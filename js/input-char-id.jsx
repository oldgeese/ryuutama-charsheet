import React from 'react';

class InputCharId extends React.Component {
  contextTypes: {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
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
    event.preventDefault();
    if (this.state.charId) {
      const path = "/char/" + this.state.charId;
      this.context.router.push(path)
    }
  }
  render() {
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

export default InputCharId;
