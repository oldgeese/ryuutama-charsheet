// @flow
import React from 'react';

type State = {
  charId: string,
  searchString: string
};

class InputCharId extends React.Component {
  state: State;
  handleInputChange: (event: Event)=>void;
  handleSubmit: (event: Event)=>void;
  handleSubmitSearch: (event: Event)=>void;

  constructor(props: any) {
    super(props);
    this.state = {
      charId: "962930"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }
  handleInputChange(event: Event) {
    let target: HTMLInputElement;
    if (event.target instanceof HTMLInputElement) {
      const name = event.target.name;
      this.setState({
        [name]: event.target.value,
      });
    }
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.state.charId) {
      const path = "/char/" + this.state.charId;
      this.context.router.push(path)
    }
  }
  handleSubmitSearch(event: Event) {
    event.preventDefault();
    const path = "/tag/" + this.state.searchString;
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
        <hr />
        <form onSubmit={this.handleSubmitSearch}>
          <div>
            検索：
          </div>
          <div>
            <input type="text" size="60" name="searchString"
              value={this.state.searchString} onChange={this.handleInputChange} />
          </div>
          <div>
            <input type="submit" name="tag" value="タグ検索" />
          </div>
      </div>
    );
  }
}

InputCharId.contextTypes = {
    router: React.PropTypes.object
}

export default InputCharId;
