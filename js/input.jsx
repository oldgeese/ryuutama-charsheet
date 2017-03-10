// @flow
import React from 'react';

type State = {
  charId: string,
  mode: string,
  searchString: string
};

class Input extends React.Component {
  state: State;
  handleInputChange: (event: Event)=>void;
  handleSubmit: (event: Event)=>void;
  handleSubmitSearch: (event: Event)=>void;
  handleClickSearchButton: (event: Event)=>void;

  constructor(props: any) {
    super(props);
    this.state = {
      charId: "",
      mode: "",
      searchString: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
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
      this.context.router.push(path);
    }
  }
  handleSubmitSearch(event: Event) {
    event.preventDefault();
    let target: HTMLFormElement;
    if (event.target instanceof HTMLFormElement) {
      // const path: string= "/char/?" + this.state.mode + "=" + encodeURIComponent(this.state.searchString);
      const path: string= "/search/" + this.state.mode + "/" + encodeURIComponent(this.state.searchString);
      this.context.router.push(path);
    }
  }
  handleClickSearchButton(event: Event) {
    let target: HTMLInputElement;
    if (event.target instanceof HTMLInputElement) {
      const name = event.target.name;
      this.setState({mode: name});
    }
  }
  render() {
    document.title = "りゅうたまキャラシート";
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
            <input type="submit" name="tag" value="タグ検索"  onClick={this.handleClickSearchButton}/>
            <input type="submit" name="title" value="タイトル検索" onClick={this.handleClickSearchButton}/>
            <input type="submit" name="name" value="PC名検索" onClick={this.handleClickSearchButton}/>
          </div>
        </form>
      </div>
    );
  }
}

Input.contextTypes = {
    router: React.PropTypes.object
}

export default Input;
