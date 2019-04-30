import React from 'react';

class Input extends React.Component {

  constructor(props) {
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

  handleInputChange(event) {
    if (event.target instanceof HTMLInputElement) {
      const name = event.target.name;
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.charId) {
      const path = "/char/" + this.state.charId;
      this.props.history.push(path);
    }
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    if (event.target instanceof HTMLFormElement) {
      const path = "/search/" + this.state.mode + "/" + encodeURIComponent(this.state.searchString);
      this.props.history.push(path);
    }
  }

  handleClickSearchButton(event) {
    if (event.target instanceof HTMLInputElement) {
      const name = event.target.name;
      this.setState({mode: name});
    }
  }

  render() {
    document.title = "りゅうたまキャラシート";
    return (
      <div className="container">
        <div className="header">
          <h1>りゅうたまキャラシート Webアプリ ver 0.0.1</h1>
          <div>
            <a href="http://charasheet.vampire-blood.net/">キャラクター保管所</a>さんの
            りゅうたまキャラデータをりゅうたま公式風のレイアウトに変換するアプリです。
            <br/>
            タグやタイトル、PC名で検索するか、キャラシートのIDを入力してください。
          </div>
          <hr/>
        </div>
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <div className="form-group">
            <label>検索</label>
            <input className="form-control" type="text" size="60" name="searchString"
              onChange={this.handleInputChange} />
          </div>
          <input className="btn btn-primary" type="submit" name="tag" value="タグ検索"  onClick={this.handleClickSearchButton}/>
          {' '}
          <input className="btn btn-secondary" type="submit" name="title" value="タイトル検索" onClick={this.handleClickSearchButton}/>
          {' '}
          <input className="btn btn-secondary" type="submit" name="name" value="PC名検索" onClick={this.handleClickSearchButton}/>
        </form>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>ID入力</label>
            <input className="form-control" type="text" size="60" name="charId"
              onChange={this.handleInputChange} />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="入力" />
          </div>
        </form>
      </div>
        <div className="footer">
          <hr/>
          GitHub: <a href="https://github.com/oldgeese/ryuutama-charsheet">https://github.com/oldgeese/ryuutama-charsheet</a>
        </div>
      </div>
    );
  }
}

export default Input;
